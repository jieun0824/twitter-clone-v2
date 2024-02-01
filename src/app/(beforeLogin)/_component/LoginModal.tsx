'use client'
import { useState } from 'react';

export default function LoginModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const onSubmit = () => {};
  const onClickClose = () => {};
  const onChangeId = () => {};
  const onChangePassword = () => {};

  return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-white relative top-5 rounded-lg flex flex-col">
          <div className="px-8 py-6 text-2xl font-bold">
            <button className="w-9 h-9 rounded-full border-none cursor-pointer absolute left-1 top-1 flex items-center justify-center" onClick={onClickClose}>
              <svg width="24" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div>로그인하세요.</div>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col flex-1">
            <div className="flex-1 px-8">
              <div className="flex flex-col h-14 relative my-3">
                <label className="w-full absolute top-0 border-1 border-gray-300 rounded-md text-xs h-full px-2 py-0 text-gray-700" htmlFor="id">아이디</label>
                <input id="id" className="w-full border-none text-base mt-3 px-2 py-2 outline-none" value={id} onChange={onChangeId} type="text" placeholder=""/>
              </div>
              <div className="flex flex-col h-14 relative my-3">
                <label className="w-full absolute top-0 border-1 border-gray-300 rounded-md text-xs h-full px-2 py-0 text-gray-700" htmlFor="password">비밀번호</label>
                <input id="password" className="w-full border-none text-base mt-3 px-2 py-2 outline-none" value={password} onChange={onChangePassword} type="password" placeholder=""/>
              </div>
            </div>
            <div className="message">{message}</div>
            <div className="px-8 py-6">
              <button className="w-full h-16 rounded-full bg-gray-900 text-white text-base cursor-pointer border-none disabled:opacity-50 hover:bg-gray-800" disabled={!id && !password}>로그인하기</button>
            </div>
          </form>
        </div>
      </div>
    );
  }