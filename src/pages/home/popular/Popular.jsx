import React ,{useState}from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Carousel from '../../../components/carousel/Carousel';

import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';

const Popular = () => {
    const [endpoint,setendpoint]=useState("movie");
    const {data,loading}=useFetch(`/${endpoint}/popular`);

  const onTabChange=(tab)=>{
    setendpoint(tab==="Movies"?"movie":"tv");
  }; 


  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">What's Popular</span>
            <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Popular;