import "./App.css";

import { foundJob as JobGrid } from "./Jobs";

export default function App() {
    const submit = () => {
        window.alert("Submit");
    };

    return (
        <>
            <details className="absolute z-10">
                <summary>Profile</summary>
                <ul align="center">
                    <a href="#" onClick={submit}>
                        <li>Login</li>
                    </a>
                    <a href="#">
                        <li>SignUp</li>
                    </a>
                </ul>
            </details>
            <main className="flex flex-col w-screen items-center justify-center">
                <div className="flex w-full flex-col text-center py-10 px-20 rounded-2xl gap-5 m-3">
                    <h2 className="main-title">Job Connect</h2>
                    <form className="flex justify-center sm:flex-col md:flex-row xl:w-full">
                        <input
                            type="text"
                            className="text-center shadow-sm focus:ring-2 w-full"
                            name="search"
                            id="text"
                            placeholder="Your Job Search Here"
                            required={true}
                        />
                        <input
                            type="text"
                            className="text-center shadow-sm focus:ring-2 w-full"
                            name="location"
                            id="location"
                            placeholder="City, State, Remote"
                        />
                        <button
                            type="submit"
                            className="flex items-center justify-center"
                            onSubmit={submit}>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </button>
                    </form>
                </div>
            </main>
            <div
                className="grid gap-1 place-items-center m-3 2xl:grid-cols-3 lg:grid-cols-2"
                id="job-container">
                <JobGrid
                    title="Job Title"
                    details="This is supposed to be job details, from XYZ organization for ABC Position"
                    location="State, Country"
                />
                <JobGrid
                    title="Job Title"
                    details="This is supposed to be job details, from XYZ organization for ABC Position"
                    location="State, Country"
                />
                <JobGrid
                    title="Job Title"
                    details="This is supposed to be job details, from XYZ organization for ABC Position"
                    location="State, Country"
                />
                <JobGrid
                    title="Job Title"
                    details="This is supposed to be job details, from XYZ organization for ABC Position"
                    location="State, Country"
                />
                <JobGrid
                    title="Job Title"
                    details="This is supposed to be job details, from XYZ organization for ABC Position"
                    location="State, Country"
                />
                <JobGrid
                    title="Job Title"
                    details="This is supposed to be job details, from XYZ organization for ABC Position"
                    location="State, Country"
                />
                <JobGrid
                    title="Job Title"
                    details="This is supposed to be job details, from XYZ organization for ABC Position"
                    location="State, Country"
                />
                <JobGrid
                    title="Job Title"
                    details="This is supposed to be job details, from XYZ organization for ABC Position"
                    location="State, Country"
                />
                <JobGrid
                    title="Job Title"
                    details="This is supposed to be job details, from XYZ organization for ABC Position"
                    location="State, Country"
                />
            </div>
        </>
    );
}
