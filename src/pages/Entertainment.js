import React, { useState } from 'react';
import { useEffect, } from 'react';

import head from  './headlines.json'


import { TextField,Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';

import styled from 'styled-components';
import NewsCard from '../components/NewsCard';







function Entertainment(props) {

        

    const[articles,setArticles]=useState([])

  
    async function fetchData(){
        try{
            const response =await axios.get('https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=65aad4e81e284841bfda24cbf492c01e')
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


  
const list = articles.map((item) =>
  <NewsCard item = {item}></NewsCard>
);


console.log()
    return (
        <div>
            


   <Box  sx={{display:'flex',flexWrap:'wrap',gap:'2rem',justifyContent:{xs:'center'}}}>{list}</Box>

      


    


        </div>
    );
}

export default Entertainment;