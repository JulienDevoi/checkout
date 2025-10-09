'use client'

import { useState } from 'react'
import { Transition } from '@headlessui/react'

export default function Features01() {

  const [tab, setTab] = useState<number>(1)

  return (
    <section className="relative bg-zinc-50">
      <div className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Card fees drain margin, <br /> frozen accounts put your business at risk</h2>
            <p className="text-lg text-zinc-500">2–3%+ card fees on every sale became the standard.</p>
            <p className="text-lg text-zinc-500">Cross‑border FX adds up.</p>
            <p className="text-lg text-zinc-500">Reconciliation and audits waste time.</p>
            <p className="text-lg text-zinc-500">Bank & PSPs freezes put your business at risk.</p>
            <p className="text-xl font-semibold text-zinc-900 mt-6 mb-2">There's a better way.</p>
          </div>
          <div>
            {/* Tabs items */}
            <div className="relative lg:max-w-none pb-12 md:pb-20">
              <div className="relative flex flex-col">
                {/* Comparison Table - Same for all tabs */}
                <Transition show={tab === 1 || tab === 2 || tab === 3}>
                  <div className="w-full transition ease-in-out data-closed:opacity-0 data-enter:duration-700 data-enter:data-closed:-translate-y-4 data-leave:duration-300 data-leave:data-closed:translate-y-4">
                    <div className="max-w-4xl mx-auto">
                      <div className="overflow-hidden rounded-3xl border border-transparent [background:linear-gradient(var(--color-white),var(--color-white))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] shadow-2xl">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b-2 border-zinc-200">
                                <th className="px-8 py-6 text-left text-base font-semibold text-zinc-900 bg-gradient-to-br from-zinc-50 to-white"></th>
                                <th className="px-8 py-6 text-center bg-gradient-to-br from-zinc-50 to-white">
                                  <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-zinc-100 rounded-full">
                                    <svg className="w-5 h-5 text-zinc-500" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-base font-bold text-zinc-600">Stripe / PayPal</span>
                                  </div>
                                </th>
                                <th className="px-8 py-6 text-center bg-gradient-to-br from-emerald-50 to-white">
                                  <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-emerald-100 rounded-full">
                                    <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-base font-bold text-emerald-600">Request Checkout</span>
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100">
                              <tr className="hover:bg-zinc-50/50 transition-all group">
                                <td className="px-8 py-5 text-base font-semibold text-zinc-900">💳 Fees</td>
                                <td className="px-8 py-5 text-center">
                                  <span className="inline-flex items-center gap-2 text-base text-zinc-600">
                                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    2.9–4%
                                  </span>
                                </td>
                                <td className="px-8 py-5 text-center">
                                  <span className="inline-flex items-center gap-2 text-base font-bold text-emerald-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    ~1%
                                  </span>
                                </td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-all group">
                                <td className="px-8 py-5 text-base font-semibold text-zinc-900">⚡ Payout time</td>
                                <td className="px-8 py-5 text-center">
                                  <span className="inline-flex items-center gap-2 text-base text-zinc-600">
                                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    3–7 days
                                  </span>
                                </td>
                                <td className="px-8 py-5 text-center">
                                  <span className="inline-flex items-center gap-2 text-base font-bold text-emerald-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Instant
                                  </span>
                                </td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-all group">
                                <td className="px-8 py-5 text-base font-semibold text-zinc-900">🛡️ Chargebacks</td>
                                <td className="px-8 py-5 text-center">
                                  <span className="inline-flex items-center gap-2 text-base text-zinc-600">
                                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    Yes
                                  </span>
                                </td>
                                <td className="px-8 py-5 text-center">
                                  <span className="inline-flex items-center gap-2 text-base font-bold text-emerald-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Never
                                  </span>
                                </td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-all group">
                                <td className="px-8 py-5 text-base font-semibold text-zinc-900">🌍 Currencies</td>
                                <td className="px-8 py-5 text-center">
                                  <span className="inline-flex items-center gap-2 text-base text-zinc-600">
                                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    Limited
                                  </span>
                                </td>
                                <td className="px-8 py-5 text-center">
                                  <span className="inline-flex items-center gap-2 text-base font-bold text-emerald-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Global (USDT, USDC)
                                  </span>
                                </td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-all group">
                                <td className="px-8 py-5 text-base font-semibold text-zinc-900">🔒 Account risk</td>
                                <td className="px-8 py-5 text-center">
                                  <span className="inline-flex items-center gap-2 text-base text-zinc-600">
                                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    Frozen anytime
                                  </span>
                                </td>
                                <td className="px-8 py-5 text-center">
                                  <span className="inline-flex items-center gap-2 text-base font-bold text-emerald-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    You own your funds
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
            {/* Section Title */}
            <div className="text-center max-w-4xl mx-auto pt-8 pb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">Launch in minutes. No code, no KYC, no middlemen.</h3>
            </div>
            {/* Tabs buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              <button
                className={`text-left px-4 py-5 border border-transparent rounded-sm ${tab !== 1 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(var(--color-white),var(--color-white))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] shadow-xs rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(1); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-inter-tight font-semibold text-zinc-900">1. Create a Checkout Page</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 1 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">Setup your checkout page in seconds.</div>
              </button>
              <button
                className={`text-left px-4 py-5 border border-transparent rounded-sm ${tab !== 2 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(var(--color-white),var(--color-white))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] shadow-xs rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(2); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-inter-tight font-semibold text-zinc-900">2. Share the Link</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 2 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">Drop it on your website, in DMs, email, social, invoices, or print as a QR.</div>
              </button>
              <button
                className={`text-left px-4 py-5 border border-transparent rounded-sm ${tab !== 3 ? 'bg-zinc-100 opacity-60 hover:opacity-100 transition' : '[background:linear-gradient(var(--color-white),var(--color-white))_padding-box,linear-gradient(120deg,var(--color-zinc-300),var(--color-zinc-100),var(--color-zinc-300))_border-box] shadow-xs rotate-1'}`}
                onClick={(e) => { e.preventDefault(); setTab(3); }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="font-inter-tight font-semibold text-zinc-900">3. Get paid & reconciled</div>
                  <svg className={`fill-zinc-400 shrink-0 ml-2 ${tab !== 3 ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                    <path d="M8.667.186H2.675a.999.999 0 0 0 0 1.998h3.581L.971 7.469a.999.999 0 1 0 1.412 1.412l5.285-5.285v3.58a.999.999 0 1 0 1.998 0V1.186a.999.999 0 0 0-.999-.999Z" />
                  </svg>
                </div>
                <div className="text-sm text-zinc-500">You receive payments instantly, ledger entries are created automatically.</div>
              </button >
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}