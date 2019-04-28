import { Layout } from "../components/Layout";

export default ({ statusCode }) => (

    <Layout title="ERROR PAGE">
        <div>
            {statusCode ? 'Couldnt get the data for the page ': 'Page not found'}
        </div>
    </Layout>
)
