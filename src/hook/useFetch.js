import React from 'react'

const useFetch = () => {
    const [date, setDate] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const request = (url, options) => {

        let response;
        let json;

        async function fetchData() {
            try{

                setLoading(true); // set loading to true
                response = await fetch(url, options);
                json = await response.json();
                setDate(json);
                setLoading(false); //   set loading to false

            } catch(error) {
                json = null; // if error on fetch, set json to null
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }
}

export default useFetch