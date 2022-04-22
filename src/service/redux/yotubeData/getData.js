export const getData = async () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const data = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=침착맨&type=video&key=AIzaSyBX10sxcM8ai2bPF7pkrJH8dGu0P3yH4kY", requestOptions)
        .then(e => e.json())
        .then(e => {
            return {
                etag: e.etag,
                regionCode: e.regionCode,
            }
        })
        .catch(err=>err)
    return data;
}