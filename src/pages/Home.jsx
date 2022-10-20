import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios"
import { useEffect, useState } from "react";

const Home = () => {
    const [tutorials, setTutorials] = useState([])
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials"

    const getTutotials = async () => {
        try {

            const { data } = await axios(url);
            setTutorials(data)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getTutotials()
    }, [])

    return (
        <>
            <AddTutorial getTutotials={getTutotials} />
            <TutorialList tutorials={tutorials} />
        </>
    );
};

export default Home;