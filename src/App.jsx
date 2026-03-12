import Header from "../components/Header";
import Entry from "../components/Entry";
import Footer from "../components/Footer";
import data from "../data";

export default function App () {

    const entryElements = data.map(entry => {
        return (
            <Entry 
                img={entry.img}
                {...entry}
            />
        )
    })

    return(
        <div className="app-body flex flex-col">
            <Header />
            <main className="main-content-container flex flex-col">
                {entryElements}
            </main>
            <Footer />
        </div>
    )
}