import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

// url: 'https://bayut.p.rapidapi.com/agencies/list',
// params: {query: 'patriot', hitsPerPage: '25', page: '0', lang: 'en'},
// headers: {
//   'x-rapidapi-host': 'bayut.p.rapidapi.com',
//   'x-rapidapi-key': '5163a1f546msh88dcf52e9960c1bp1378bfjsn1a6d1f17a245'
// }

export const fetchApi = async (url) => {
    const {data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '5163a1f546msh88dcf52e9960c1bp1378bfjsn1a6d1f17a245'
          }
    });

    return data;
}