import { signIn, providers } from "next-auth/client";
import Head from "next/head";

export default function SignIn({ providers }) {
  return (
    <>
      <Head>
        <title>Mustplan - Connexion</title>
      </Head>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-5 bg-white rounded-md shadow">
          <h1 className="flex flex-col items-center justify-center mb-4">
            Se connecter a
            <span className="block text-2xl font-light ">MustPlan</span>
          </h1>
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex justify-center">
              <button
                className="flex items-center px-2 py-1 space-x-2 border border-gray-300 rounded-md"
                onClick={() =>
                  signIn(provider.id, {
                    callbackUrl: `${window.location.protocol}//${window.location.host}/profile`,
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
                <span>Se connecter avec {provider.name}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const p = await providers(context);
  return {
    props: {
      providers: p,
    },
  };
};
