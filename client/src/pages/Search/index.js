import React, { useState } from 'react';
import SearchBar from "../../components/SearchBar";
import API from "../../utils/API";
import "./style.css";
import { useStore } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import Box from "../../components/Box";
import useStyles from "../../components/Styles";

function Search() {

    const classes = useStyles();
    const [title, setTitle] = useState("");
    const Store = useStore();
    const [list, setList] = useState(Store.getState().list && Store.getState().list.length > 0 ? Store.getState().list : [0]);


    Store.subscribe(() => {
        if (Store.getState().updated !== 'list') return;
        Store.getState() && Store.getState().list.length > 0 ? setList(Store.getState().list) : setList([0]);
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            return;
        }
        API.searchImages(title)
            .then(res => {
                let payload;
                res.data.length > 0 ? payload = res.data : payload = [-1]
                Store.dispatch({ type: 'newList', payload: payload });
            })
            .catch(err => {
                console.log(err.response);
                Store.dispatch({ type: 'newList', payload: [-1] });
            });
    }

    const handleInputChange = (e, field) => {
        // field == "title" ? setTitle(e.target.value) : [0]
        if (field === "title") {
            setTitle(e.target.value)
        
        }
        console.log(e.target.value)

    }

    const addContent = () => {
        if (list[0] === 0) {
            return <div className="prompt-message-menu"><p>Search for an Image!</p></div>;
        } else if (list[0] === -1) {
            return <div className="prompt-message-menu"><p>No results!</p></div>;
        } else {
            return list.map(el => (
                <Grid item sm={3}>
                    <Box key={el.id} id={el.id} title={el.title} image={el.image}></Box>
                </Grid>
            ));
        }
    
    }
    return (
        <Container maxWidth="xl">
        <div className={classes.container} className="container">
            <SearchBar handleInputChange={(e) => handleInputChange(e, 'title')} placeholder="Search an Image" />
            <button onClick={handleSubmit}>Submit</button>
            <Grid container spacing={4} >
                {addContent()}
            </Grid>
        </div>

    </Container>
   
    )
}
export default Search;