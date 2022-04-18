// import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';
// import { React } from 'react';
// import Law from '../images/the-law.jpg';

// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
//   title: {
//     fontSize: 24,
//     textAlign: "center",
//   },
//   text: {
//     margin: 12,
//     fontSize: 14,
//     textAlign: "justify",
//     fontFamily: "Times-Roman",
//   },
//   image: {
//     marginVertical: 15,
//     marginHorizontal: 100,
//   },
//   header: {
//     fontSize: 12,
//     marginBottom: 20,
//     textAlign: "center",
//     color: "grey",
//   },
//   pageNumber: {
//     position: "absolute",
//     fontSize: 12,
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: "center",
//     color: "grey",
//   },
// });


// function FirstPDF() {

//   return (
//     <div className='samples'>
//       <Document>
//         <Page style={styles.body}>
//           <Text style={styles.header} fixed>
//             <Image style={styles.image} src={Law} />
//             <Text style={styles.text}>Who are those horrible orange men?
//               Wow! A superpowers drug you can just rub onto your skin? You'd think it would be something you'd have to freebase. You wouldn't. Ask anyway! Oh dear! She's stuck in an infinite loop, and he's an idiot! Well, that's love for you.

//               Goodbye, friends. I never thought I'd die like this. But I always really hoped. I decline the title of Iron Cook and accept the lesser title of Zinc Saucier, which I just made up. Uhh… also, comes with double prize money.

//               And why did 'I' have to take a cab?
//               I never loved you. You seem malnourished. Are you suffering from intestinal parasites? THE BIG BRAIN AM WINNING AGAIN! I AM THE GREETEST! NOW I AM LEAVING EARTH, FOR NO RAISEN! Professor, make a woman out of me.

//               Spare me your space age technobabble, Attila the Hun!
//               Yeah. Give a little credit to our public schools.
//               Hello Morbo, how's the family?
//               We're also Santa Claus!
//               You can see how I lived before I met you. Or a guy who burns down a bar for the insurance money! I am Singing Wind, Chief of the Martians. No argument here. My fellow Earthicans, as I have explained in my book 'Earth in the Balance'', and the much more popular ''Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.

//               Hi, I'm a naughty nurse, and I really need someone to talk to. $9.95 a minute.
//               For one beautiful night I knew what it was like to be a grandmother. Subjugated, yet honored.
//               Isn't it true that you have been paid for your testimony?
//               And then the battle's not so bad? Guards! Bring me the forms I need to fill out to have her taken away! Fry! Stay back! He's too powerful! Would you censor the Venus de Venus just because you can see her spewers?

//               Hey, tell me something. You've got all this money. How come you always dress like you're doing your laundry? Large bet on myself in round one. And yet you haven't said what I told you to say! How can any of us trust you?

//               Yep, I remember. They came in last at the Olympics, then retired to promote alcoholic beverages! Yes, except the Dave Matthews Band doesn't rock. Bender, being God isn't easy. If you do too much, people get dependent on you, and if you do nothing, they lose hope. You have to use a light touch. Like a safecracker, or a pickpocket.

//               You wouldn't. Ask anyway! Humans dating robots is sick. You people wonder why I'm still single? It's 'cause all the fine robot sisters are dating humans! Hi, I'm a naughty nurse, and I really need someone to talk to. $9.95 a minute.

//               Also Zoidberg. Wow! A superpowers drug you can just rub onto your skin? You'd think it would be something you'd have to freebase. I feel like I was mauled by Jesus. Hey, tell me something. You've got all this money. How come you always dress like you're doing your laundry?

//               Kif, I have mated with a woman. Inform the men. Wow! A superpowers drug you can just rub onto your skin? You'd think it would be something you'd have to freebase. Dr. Zoidberg, that doesn't make sense. But, okay!

//               Now what? I don't 'need' to drink. I can quit anytime I want! Oh, you're a dollar naughtier than most. You've killed me! Oh, you've killed me!

//               Morbo will now introduce tonight's candidates… PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo's good friend, Richard Nixon. Why would I want to know that? I don't want to be rescued. Throw her in the brig.

//               Who am I making this out to? Now what? Hello Morbo, how's the family? It's okay, Bender. I like cooking too. Who's brave enough to fly into something we all keep calling a death sphere?

//               For example, if you killed your grandfather, you'd cease to exist! Then we'll go with that data file! Oh Leela! You're the only person I could turn to; you're the only person who ever loved me. Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd.

//               Morbo will now introduce tonight's candidates… PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo's good friend, Richard Nixon. Now Fry, it's been a few years since medical school, so remind me. Disemboweling in your species: fatal or non-fatal?</Text>
//           </Text>
//           <Text
//             style={styles.pageNumber}
//             render={({ pageNumber, totalPages }) =>
//               `${pageNumber} / ${totalPages}`
//             }
//           />
//         </Page>
//       </Document>
//     </div>
//   );
// }

// export default FirstPDF;