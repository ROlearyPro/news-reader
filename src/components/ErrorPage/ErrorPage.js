import './ErrorPage.css';
import { useParams } from 'react-router-dom';

function ErrorPage({error}) {
const { code } = useParams();

const errorCode = error || code
console.error(errorCode);

    return (
        <section>
            <h2>{`Sorry, we got an error! Please wait a bit, then try again.`}</h2>
        </section>
    );
}

export default ErrorPage;