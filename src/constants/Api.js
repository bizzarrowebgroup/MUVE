const IS_DEV = false;
const prod = "https://musve-api.herokuapp.com/";
const dev = "http://192.168.178.22:3000/";

const fetchMusei = async () => {
    let res = await fetch((IS_DEV ? dev : prod) + `musei`);
    if (res.ok) {
        return await res.json();
    } else {
        return Promise.reject();
    }
}
const fetchNews = async () => {
    let res = await fetch((IS_DEV ? dev : prod) + `news`);
    if (res.ok) {
        return await res.json();
    } else {
        return Promise.reject();
    }
}

const searchMusei = async (q) => {
    let res = await fetch((IS_DEV ? dev : prod) + 'musei?q=' + q);
    if (res.ok) {
        return await res.json();
    } else {
        return Promise.reject();
    }
}

const fetchInfoMuseo = async (id) => {
    let res = await fetch((IS_DEV ? dev : prod) + `contenutimuseo/?museoID=` + id);
    if (res.ok) {
        return await res.json();
    } else {
        return Promise.reject();
    }
}

export {
    fetchMusei,
    fetchNews,
    searchMusei,
    fetchInfoMuseo
};