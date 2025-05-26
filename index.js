//RESUELVE TUS EJERCICIOS AQUI


const getAllBreeds = () => {
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then((res) => res.json())
        .then((json) => {
            return Object.keys(json.message)
        })

}

const getRandomDog = () => {
    return fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((json) => {
            return json.message;
        })
}

const getAllImagesByBreed = () => {

    return fetch("https://dog.ceo/api/breed/komondor/images")
        .then((res) => res.json())
        .then((json) => {
            return json.message;
        })

}

const getAllImagesByBreed2 = (breed) => {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then((res) => res.json())
        .then((json) => {
            return json.message;
        })
}

const getGitHubUserProfile = (username) => {
    return fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((json) => {
            return json;
        })

}

const printGithubUserProfile = (username) => {
    return fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((json) => {
            return { img: json.avatar_url, name: json.name };
        })
}


const getAndPrintGitHubUserProfile = (username) => {
    return fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((json) => {
            const returnValue = `<section>
                                    <img src="${json.avatar_url}" alt="${json.name}">
                                    <h1>${json.name}</h1>
                                    <p>Public repos: ${json.public_repos}</p>
                                </section>`
            return returnValue;
        })
}

const fetchGithubUsers = (userNames) => {
    const allPromises = []
    userNames.forEach(element => {
        const newPromise = fetch(`https://api.github.com/users/${element}`)
        allPromises.push(newPromise)
    });
    Promise.all(allPromises)
        .then((values) => {
            return Promise.all(values)
                .then(valuesJson => {
                    console.log(valuesJson)
                })

        })
    // .then((json) => console.log(json))
}