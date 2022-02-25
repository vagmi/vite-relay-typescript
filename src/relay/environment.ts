import {Environment, Network, RecordSource, RequestParameters, Store, Variables} from 'relay-runtime';

async function fetchGraphQL(params : RequestParameters, variables: Variables) {
    const TOKEN: string = import.meta.env.VITE_GRAPHQL_TOKEN?.toString();
    const URL = 'http://localhost:4000/graphql';
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            Authorization: `bearer ${TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: params.text,
            variables,
        }),
    }
    );
    return await response.json();
}

export default new Environment({
    network: Network.create(fetchGraphQL),
    store: new Store(new RecordSource()),
})