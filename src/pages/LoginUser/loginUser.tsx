import React from 'react';
import Link from 'next/link';
import { HtmlHTMLAttributes } from 'react';


function Connexion() {
  return (
    <>
      <h1 className='text-red-800 text-center text-4xl my-8'>
        Page de Connexion
      </h1>
      <div className="container mx-auto px-4">
        <form className="flex flex-col max-w-sm mx-auto">
          <label htmlFor="email" className="text-lg mb-2">
            Email :
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border border-gray-400 px-2 py-1 rounded mb-4"
          />

          <label htmlFor="password" className="text-lg mb-2">
            Mot de passe :
          </label>
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            className="border border-gray-400 px-2 py-1 rounded mb-4"
          />

          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Se connecter
          </button>
        </form>

        <div className="flex justify-center mt-4">
          <Link href="/index"> <p>Retour à laccueil</p></Link>
          <Link href="/inscription">
            <p className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
              Inscription
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Connexion;