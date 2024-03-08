import './App.css'

export default function App() {
    const submit = () => {
    window.alert("Submit");
  }

  return (
      <main className="flex flex-col w-screen h-screen items-center justify-center">
          <label className="flex flex-col text-center py-10 px-20 rounded-2xl gap-5 m-30">
              Job Connect
              <form className="flex justify-center sm:flex-col md:flex-row min-w-full">
                  <input
                      type="text"
                      className="text-center shadow-sm focus:ring-2"
                      name="search"
                      id="text"
                      placeholder="Your Job Search Here"
                      required={true}
                  />
                  <input
                      type="text"
                      className="text-center shadow-sm focus:ring-2"
                      name="location"
                      id="location"
                      placeholder="City, State, Remote"
                      required={true}
                  />
                  <button
                      type="submit"
                      className="flex items-center justify-center"
                      onSubmit={submit}>
                      <span className="material-symbols-outlined">search</span>
                  </button>
              </form>
          </label>
      </main>
  );
}
