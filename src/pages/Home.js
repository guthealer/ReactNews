import React, { useState } from 'react';
import { useEffect, } from 'react';

import head from  './headlines.json'


import { TextField,Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';

import styled from 'styled-components';
import NewsCard from '../components/NewsCard';







function Home(props) {

        const[input,setinput]=useState('india')

    const[articles,setArticles]=useState([])





  
    async function fetchData(){
        try{
            // const response =await axios.get(`https://newsapi.org/v2/top-headlines?country=${input}&apiKey=65aad4e81e284841bfda24cbf492c01e`)

            const response =await axios.get(`https://newsapi.org/v2/top-headlines?q=${input}&apiKey=65aad4e81e284841bfda24cbf492c01e`)
            console.log(response.data.articles)

            const articlesItems = response.data.articles;
            setArticles(articlesItems)
        }
        catch(error){
           console.log(error)
        }
    }

    useEffect(
        ()=>{
            fetchData()
        }
        
    ,[])



    
    function submitHandler(){
        fetchData(input);
    }


  
const list = articles.map((item) =>
  <NewsCard item = {item}></NewsCard>
);


console.log()
    return (
        <div>
            home
            <Box sx={{display:'flex',justifyContent:'center',margin:'1rem'}}>
            <input value={input} onChange={(e)=>setinput(e.target.value)}/>
            <Button variant="contained" onClick={()=>submitHandler()}>Search</Button>
            </Box>


   <Box  sx={{display:'flex',flexWrap:'wrap',gap:'2rem',justifyContent:{xs:'center'}}}>{list}</Box>

      


    


        </div>
    );
}

export default Home;