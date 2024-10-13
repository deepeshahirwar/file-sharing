// import * as React from 'react';
// import {
//   Body,
//   Button,
//   Container,
//   Column,
//   Head,
//   Heading,
//   Html,
//   Img,
//   Preview,
//   Row,
//   Section,
//   Text,
// } from "@react-email/components"; 

// export const EmailTemplate = ({ response }) => {
//   // Provide fallback default values to avoid 'undefined'
//   const {
//     emailToSend = "user@example.com", 
//     userName = "Unknown User", 
//     fileName = "Unknown", 
//     fileSize = "Unknown", 
//     fileType = "Unknown", 
//     shortUrl = "#"
//   } = response || {};

//   return (
//     <Html>
//       <Head />
//       <Preview>File Shared with You</Preview>
//       <Body style={main}>
//         <Container>
//           <Section style={logo}>
//             <Img src={`${baseUrl}/static/yelp-logo.png`} />
//           </Section>

//           <Section style={content}>
//             <Row>
//               <Img style={image} width={620} src={`${baseUrl}/static/yelp-header.png`} />
//             </Row>

//             <Row style={{ ...boxInfos, paddingBottom: "0" }}>
//               <Column>
//                 <Heading style={{ fontSize: 32, fontWeight: "bold", textAlign: "center" }}>
//                   Hi {emailToSend.split("@")[0]},
//                 </Heading>
//                 <Heading as="h2" style={{ fontSize: 26, fontWeight: "bold", textAlign: "center" }}>
//                   {userName} shared a file with you
//                 </Heading>

//                 <Text style={paragraph}>
//                   <b>File Name: {fileName}</b>
//                 </Text>
//                 <Text style={{ ...paragraph, marginTop: -5 }}>
//                   <b>File Size: {fileSize}</b>
//                 </Text>
//                 <Text style={{ ...paragraph, marginTop: -5 }}>
//                   <b>File Type: {fileType}</b>
//                 </Text>

//                 <Text style={{ color: "rgb(0,0,0, 0.5)", fontSize: 14, marginTop: -5 }}>
//                   You can now store and share files with your friends and family.
//                 </Text>

//                 <Text style={{ ...paragraph, marginTop: -5 }}>
//                   Click on the button below to access your file.
//                 </Text>
//               </Column>
//             </Row>

//             <Row style={{ ...boxInfos, paddingTop: "0" }}>
//               <Column style={containerButton} colSpan={2}>
//                 <Button style={button} href={shortUrl}>Click here to Download</Button>
//               </Column>
//             </Row>
//           </Section>

//           <Section style={containerImageFooter}>
//             <Img style={image} width={620} src={`${baseUrl}/static/yelp-footer.png`} />
//           </Section>

//           <Text style={{ textAlign: "center", fontSize: 12, color: "rgb(0,0,0, 0.7)" }}>
//             © 2024 | Deepesh Ahirwar. All Rights Reserved. INDIA | www.file-sharing-app.com
//           </Text>
//         </Container>
//       </Body>
//     </Html>
//   );
// };
 



//_components/email-template.js 
// this template is working fine 
import React from "react";
export const EmailTemplate = ({ response }) => {
  return (
    <div>
      <h1>File Shared with You</h1>
      <p>{response?.userName} has shared a file with you. Click the link below to access it:</p>  

      <div className="flex flex-col gap-2 mt-2 mb-2">  
        <h2>File Details:</h2>
      <p>File Name: {response?.fileName}</p>
      <p>File Size: {response?.fileSize}</p>
      <p>File Type: {response?.fileType}</p> 
      <p>File URL: {response?.shortUrl}</p> 
      </div>

      <a href={response?.shortUrl} className="text-blue-500 text-bold underline text-center text-2xl">
        Download File</a>
    </div>
  );
};
