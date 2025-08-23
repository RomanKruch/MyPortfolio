'use client';
import { useState } from 'react';
import s from './HireMeForm.module.css';

const initial = {
  name: '',
  email: '',
  telegram: '',
  projectType: 'Landing / Website',
  budget: '$200-500',
  timeline: '2-4 weeks',
  brief: '',
};

export default function HireMeForm() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const onChange = (e: any) => setForm(s => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg('✅ Sent! I will reply soon.');
        setForm(initial);
      } else {
        setMsg(data?.message || 'Validation error.');
      }
    } catch {
      setMsg('Network error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h2>Hire me</h2>
      <form onSubmit={onSubmit} className={s.form}>
        <div className={s.wrap}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              name="name"
              placeholder="Your name*"
              value={form.name}
              onChange={onChange}
              required
            />
          </label>

          <label className={s.label}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              placeholder="email@example.com*"
              value={form.email}
              onChange={onChange}
              required
            />
          </label>

          <label className={s.label}>
            Telegram
            <input
              className={s.input}
              name="telegram"
              placeholder="@username (optional)"
              value={form.telegram}
              onChange={onChange}
            />
          </label>

          <label className={s.label}>
            Project Type
            <select
              className={s.input}
              name="projectType"
              value={form.projectType}
              onChange={onChange}
            >
              <option>Landing / Website</option>
              <option>E-commerce</option>
              <option>Web App (Full-stack)</option>
              <option>Backend API</option>
              <option>Optimization / Fixes</option>
              <option>Other</option>
            </select>
          </label>

          <label className={s.label}>
            Budget range
            <select className={s.input} name="budget" value={form.budget} onChange={onChange}>
              <option>&lt;$200</option>
              <option>$200-500</option>
              <option>$500-1000</option>
              <option>$1000-2000</option>
              <option>&gt;$2000</option>
            </select>
          </label>

          <label className={s.label}>
            Timeline
            <select className={s.input} name="timeline" value={form.timeline} onChange={onChange}>
              <option>1-2 weeks</option>
              <option>2-4 weeks</option>
              <option>1-2 months</option>
              <option>Not sure</option>
            </select>
          </label>
        </div>

        <label className={s.textarea_label}>
          Short description
          <textarea
            className={`${s.input} ${s.textarea}`}
            name="brief"
            placeholder="Describe your project…*"
            value={form.brief}
            onChange={onChange}
            required
            maxLength={1000}
          />
        </label>

        <button disabled={loading} className={s.btn}>
          {loading ? 'Sending…' : 'Send Request'}
        </button>

        {msg && <p className={s.message}>{msg}</p>}
      </form>
    </section>
  );
}
