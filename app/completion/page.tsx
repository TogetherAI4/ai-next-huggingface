'use client';

import { useCompletion } from 'ai/react';

export default function Chat() {
  const { completion, input, handleInputChange, handleSubmit, error, data } =
    useCompletion();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {/* Logo einfügen */}
      <div className="mb-4">
        <img src="/pfad/zum/deinem-logo.png" alt="Logo" className="mx-auto" /> {/* Stelle sicher, dass du "/pfad/zum/deinem-logo.png" durch den tatsächlichen Pfad zu deinem Logo ersetzt. */}
      </div>
      <h4 className="text-xl font-bold text-gray-900 md:text-xl pb-4">
        useCompletion Example
      </h4>
      {data && (
        <pre className="p-4 text-sm bg-gray-100">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
      {error && (
        <div className="fixed top-0 left-0 w-full p-4 text-center bg-red-500 text-white">
          {error.message}
        </div>
      )}
      {completion}
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Frag mich"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
