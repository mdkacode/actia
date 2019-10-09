
import axios from "axios";
const ApiCall = async (url: string) => {


    // CallApi Here START
    let getData = await axios.get(url);

    const mastermenu = getData.data;

    return { mastermenu };
    // Call API Here END

}

const PostApiCall = async (url: string,data:object) => {

    // CallApi Here START
    let getData = await axios({
        method: 'post',
        url: url,
        headers: {},
        data: data
    });

    const mastermenu = getData.data;

    return { mastermenu };
    // Call API Here END

}

export { ApiCall, PostApiCall }