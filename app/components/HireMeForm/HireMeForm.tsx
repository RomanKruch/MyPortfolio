'use client';
import { useState } from 'react';
import s from './HireMeForm.module.css';
import { HireMeMessages } from '../../../messages/types';
import { option } from 'framer-motion/client';

interface IProps {
  messages: HireMeMessages;
}

const initial = {
  name: '',
  email: '',
  telegram: '',
  projectType: 'Landing / Website',
  budget: '$200-500',
  timeline: '2-4 weeks',
  brief: '',
};

export default function HireMeForm({ messages }: IProps) {
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
      <h2>{messages.title}</h2>
      <form onSubmit={onSubmit} className={s.form}>
        <div className={s.wrap}>
          <label className={s.label}>
            {messages.nameLabel}
            <input
              className={s.input}
              name="name"
              placeholder={messages.namePlaceholder}
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
              placeholder={messages.telegramPlaceholder}
              value={form.telegram}
              onChange={onChange}
            />
          </label>

          <label className={s.label}>
            {messages.projectTypeLabel}
            <select
              className={s.input}
              name="projectType"
              value={form.projectType}
              onChange={onChange}
            >
              {messages.projectTypeOptions.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className={s.label}>
            {messages.budgetLabel}
            <select className={s.input} name="budget" value={form.budget} onChange={onChange}>
              <option>&lt;$200</option>
              <option>$200-500</option>
              <option>$500-1000</option>
              <option>$1000-2000</option>
              <option>&gt;$2000</option>
            </select>
          </label>

          <label className={s.label}>
            {messages.timelineLabel}
            <select className={s.input} name="timeline" value={form.timeline} onChange={onChange}>
              {messages.timelineOptions.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>

        <label className={s.textarea_label}>
          {messages.descriptionLabel}
          <textarea
            className={`${s.input} ${s.textarea}`}
            name="brief"
            placeholder={messages.descriptionPlaceholder}
            value={form.brief}
            onChange={onChange}
            required
            maxLength={1000}
          />
        </label>

        <button disabled={loading} className={s.btn}>
          {loading ? messages.sendingBtn : messages.sendBtn}
        </button>

        {msg && <p className={s.message}>{msg}</p>}
      </form>
    </section>
  );
}
