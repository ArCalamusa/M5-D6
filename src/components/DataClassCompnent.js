import React, { useEffect } from "react";

export class DataClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
        this.abortController = new AbortController() //permette di non far proseguire la chiamata api
    }

    async getBooks() {
        try {
            const data = await fetch('https://epicbooks.onrender.com', {
                signal: this.abortController.signal
                //al mio segnale chiudi la chiamata api
            })
            const response = await data.json()
            this.setState({ books: response })
        } catch (error) {
            console.log(error);
        }
    }
    componentDidMount() {
        this.getBooks()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.books !== prevState.books) {
            console.log("i dati sono cambiati", this.state.books)
        }
    }

    componentWillUnmount() {
        this.abortController.abort() //allo smontaggio del componente viene terminata la chiamata api
    }

    render() {
        if (this.state.books.length === 0) {
            return (
                <div>
                    Loading
                </div>
            )

        }
        <div>
            {this.state.books.map(book => {
                return (
                    <div key={book.asin}>
                        <p>{book.title}</p>
                    </div>
                )
            })}
        </div>
    };
}

/*
    ///functional component

    const DataClassComponent2 = () => {
        const [book, setBooks] = useState([]);

        const getBooks = async () => {
            try {
                const data = await fetch('https://epicbooks.onrender.com');
                const response = await data.json();
                setBooks(response);
            } catch (error) {
                console.log(error);
            }
        };

        useEffect(() => {
            getBooks()
            return () => {
                console.log('smontaggio ok')
            }
        }, [book])

        return
        <div>
            {book.map((item) => {
                <div key={item.asin}>
                    <p>{item.title}</p>
                </div>
            })}
        </div>
    }


export default DataClassComponent2

*/