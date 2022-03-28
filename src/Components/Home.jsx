import React from "react";

function Home() {
    let [users, setUsers] = React.useState([])

    React.useEffect(() => {
        let isSubscribed = true

        fetch(`https://masai-api-mocker.herokuapp.com//user/<cc4a5ce1b3df48aec5d22d1f16b894a0b894eccc>`)
        .then((res) => res.json())
        .then((res) => isSubscribed && setUsers(res))
        .catch((err) => console.log(err))

        return () => {
            isSubscribed = false
        }
    }, [])

    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}

export { Home }