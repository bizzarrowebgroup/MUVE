const fetchMusei = async () => {
    let res = await fetch(`http://192.168.178.22:3000/musei`);
    if (res.ok) {
        return await res.json();
    } else {
        return Promise.reject();
    }
}
const fetchNews = async () => {
    let res = await fetch(`http://192.168.178.22:3000/news`);
    if (res.ok) {
        return await res.json();
    } else {
        return Promise.reject();
    }
}

const searchMusei = async (q) => {
    let res = await fetch('http://192.168.178.22:3000/musei?q=' + q);
    if (res.ok) {
        return await res.json();
    } else {
        return Promise.reject();
    }
}

const fetchInfoMuseo = async (id) => {
    let res = await fetch(`http://192.168.178.22:3000/contenutimuseo/?museoID=`+id);
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