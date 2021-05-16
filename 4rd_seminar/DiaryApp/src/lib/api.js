import axios from 'axios';

export const getCardData = async () => {
    try {
        const { data: { data: data } } = await axios.get('http://localhost:4000/posts');
        return data;
    } catch (e) {
        //console.log("[FAIL] GET card data");
        return null;
    }

};