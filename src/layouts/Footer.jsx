import React from "react"; 
import {
    CardTitle,
    CardGroup,
    Nav,
    Card,
    CardLink
  } from "reactstrap";
export default function Footer (){ 
    return (
<Card className="bg-[#F9f9f9] px-[6rem] py-[6rem]">
<CardGroup >
<CardTitle tag="h1" className="">Let's work together on your next products.</CardTitle>
</CardGroup>
<Nav className="flex flex-row  ">
    <CardLink className="no-underline"  href="mailto:gokcetezelavsar@gmail.com">gokcetezelavsar@gmail.com</CardLink>
    <CardLink className="no-underline" href="URL">Personal Blog</CardLink>
    <CardLink className="no-underline" href="URL">Github</CardLink>
    <CardLink className="no-underline" href="URL">LinkedIn</CardLink>
  
    </Nav>
 </Card>

)}

/* background-color:#BAB2E7  : #141414* */