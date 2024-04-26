export default function Contact() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="nom" className="block text-sm font-medium leading-6 text-white">
          Nom
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="nom"
            id="nom"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="John Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
          Email
        </label>
        <div className="mt-1">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
      <label htmlFor="comment" className="block text-sm font-medium leading-6 text-white">
        Votre message
      </label>
      <div className="mt-2">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={''}
        />
      </div>
    </div>
    </form>
  );
}
