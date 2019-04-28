import { Layout } from "../components/Layout";
import Link from 'next/link';

export default () => (
    <Layout title="Blog">
        <ul>
            <li>
                <Link as="react-post" href="/post?title=React">
                    <a>React</a>
                </Link>
            </li>
        </ul>
    </Layout>
)
