// HTTP 통신 동작을 모방한 코드
function fetchData(text) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const data = `받은 데이터는 ${text}입니다.`;
            resolve(data)
        }, 1000);
    });
}

export const getData = async (text) => {
    const data = await fetchData(text);
    return await data
}