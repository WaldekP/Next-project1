import { Layout } from "../components/Layout";
import { Component } from 'react';
import Error from './_error';
import fetch from 'isomorphic-unfetch';

export default class About extends Component {
    static async getInitialProps() {
        const res = await fetch("https://api.github.com/users/WaldekP")
        const statusCode = res.status > 200 ? res.status : false;
        return {
            user: await res.json(),
            statusCode,
        }
    }


    render() {
        const { statusCode} = this.props;

        if (statusCode) {
            return <Error statusCode={statusCode}/>
        }

        return (
            <Layout title="ABOUT ME">
                <p>I am javascript programmer</p>
                <img src="/static/JavaScript-logo.png"/>
            </Layout>
        )
    }
}

