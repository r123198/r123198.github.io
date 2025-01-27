import { Link, Box, Text, Heading, GridItem } from "@chakra-ui/react"
import Head from "next/head"
import { Grid } from "../components/Grid"
import { Experience } from "../components/Experience"
import Cursor from "../components/Cursor"
import { Avatar } from "../components/Avatar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Rafael - Developer</title>
      </Head>
      <Cursor />

      <Box py="115px" px={4} maxWidth={500} mx="auto">
        <Grid fluid templateColumns="repeat(4, 1fr)" mb={10} alignItems="center">
          <GridItem colSpan={1}>
            <Avatar />
          </GridItem>
          <GridItem colSpan={3}>
            <Box>
              <Heading as="h1" size="lg">
                Rafael Tibudan
              </Heading>
              <Text>Software Developer</Text>
              {/* <Link
                color="white"
                opacity={0.5}
                href="https://etherscan.io/address/0xff5fe6e0d3d48c90a66217dd4a7560a3ed8dacd2"
              >
                bonhomme.eth
              </Link> */}
            </Box>
          </GridItem>
        </Grid>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={2}>
            About
          </Heading>
          <Text>
            Hi, I'm Rafael. I am a passionate software developer with over two years of experience creating innovative mobile and web applications, specializing in Flutter, Vue.js, and backend solutions like Firebase and Laravel. My projects range from AI-powered rice disease detection and real-time COVID-19 tracking to offline-first POS systems and a Filipino Language Chatbot. With a focus on driving impact through efficiency and user-centered design, I aim to build scalable tech solutions that address real-world challenges, particularly in the Philippines.
          </Text>
        </Box>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={10}>
            Work Experience
          </Heading>

          <Experience
            href="https://www.jarvisanalytics.com/"
            side="2024 - Ongoing"
            title="Jarvis Analytics - Frontend Developer"
            desc="Dental Dashboard and Data Analytics Platform"
            stack="Laravel • VueJS • AngularJS"
          />
          <Experience
            href=" https://play.google.com/store/apps/details?id=com.ecitizenph.mobile&hl=en"
            side="2024 - Ongoing"
            title="Ecitizen - Software Engineer"
            desc="Disaster Preparedness Platform"
            stack="Android • iOS • Flutter • Laravel • Google Maps"
          />
          <Experience
            href="http://www.ibayad.com"
            side="2023 - Ongoing"
            title="Ibayad - Software Engineer"
            desc="Financial Platform"
            stack="Android • iOS • Flutter • Swift • Java"
          />
          <Experience
            href="https://www.webfuelagency.com/services/"
            side="2023"
            title="Web Fuel Agency - Software Engineer"
            desc="Education Platform"
            stack="Android • iOS • Flutter • Swift • Java • AI Integration"
          />
          <Experience
            href="https://pic-a-talk.com"
            side="2023"
            title="Pic-A-Talk - Software Developer"
            desc="Frontend Mobile Developer at Pic-a-Talk Adobokashi Inc., engineered and launched major Flutter app features, optimized state management with BLoC and Provider, integrated REST APIs with AWS services, and reduced data latency by 60% through infrastructure migration from Heroku to AWS."
            stack="Flutter • Firebase • Django • AWS"
          />
          <Experience
            href="https://msuiit.edu.ph"
            side="2023"
            title="MSU Iligan Institute of Technology - Research Assistant"
            desc="Research Assistant at MSU-IIT, developed a Flutter-based app for the Reversed Vending Machine project with Google Maps integration and Firebase backend, enabling recycling point tracking for 500+ users while reducing server costs by 40%."
            stack="Python • Object Detection • Firebase • Flutter • Google Maps"
          />
          <Experience
            href="https://msuiit.edu.ph"
            side="2022 – 2023"
            title="MSU Iligan Institute of Technology - Computer Programmer 1"
            desc="Computer Programmer at MSU-IIT, developed and deployed the cross-platform my.Eskwela app with Flutter and Flask, boosting student engagement by 40% and parent involvement by 25%, and implemented in-app messaging to increase parent-teacher interactions by 60%."
            stack="Flutter • JQuery • Flask • PubNub"
          />
          <Experience
            href="https://www.jarvisanalytics.com/"
            side="2020"
            title="Jarvis Analytics - Frontend Intern"
            desc="Software Engineering Intern at Jarvis Analytics, led a team to develop a real-time COVID-19 tracking web app using Vue.js and Laravel, improving data accuracy by 95% and reducing manual update time by 90% through API integration."
            stack="Laravel • VueJS • AngularJS"
          />

          <Heading as="h2" size="md" mt={14} mb={10}>
            Side Projects
          </Heading>

          {/* <Experience
            href="https://www.instagram.com/dolenn.bzh"
            image="/dolenn-single.png"
            side="ongoing"
            title="Dolenn - Hot Sauce"
            desc="Making hot sauces with a friend, made in Brittany with local ingredients."
            stack="Design • Illustration • Packaging • Cooking"
          />
          <Experience
            href="https://offline.london"
            image="/offline-favicon.png"
            side="2024"
            title="Offline Nostalgia"
            desc="Generative art project around the offline era. Physical mint."
            stack="Solidity • IYK Chips • fully onchain"
          /> */}
          <Experience
            image="/offline.gif"
            href="https://drive.google.com/file/d/1QF5yAqg0mLot79paoj6csbZdCcDkxX8x/view?usp=sharing"
            side="2022"
            title="TB Heal: A Monitoring Application for TB Patients"
            desc="Developed a mobile application for monitoring patients with Tuberculosis."
            stack="Android • Flutter • Java • Firebase"
          />
          <Experience
            image="/offline-favicon.png"
            href="https://github.com/Rafael-main/PARKING_SYSTEM"
            side="2023"
            title="Parking System with Image Processing"
            desc="Developed a parking system implemented with an ESP-32 built-in camera integrated with Python for Image Processing."
            stack="Python • OpenCV • Arduino • ESP-32"
          />
          <Experience
            image="/tamiko.svg"
            href="https://github.com/Rafael-main/Rice-Disease-Detection-App"
            side="2022"
            title="Rice Disease Identification App"
            desc="Developed a Flutter-based mobile app using MobileNet to identify rice diseases, achieving 89% accuracy and 85% user satisfaction among farmers."
            stack="Flutter • Tensorflow • Tensorflow lite"
          />

          <Heading as="h2" size="md" mt={14} mb={10}>
            Links
          </Heading>

          <Experience
            side="Github"
            title="@r123198"
            href="https://github.com/r123198"
            mb={4}
          />
          {/* <Experience
            side="Etherscan"
            title="bonhomme.eth"
            href="https://etherscan.io/address/0xff5fe6e0d3d48c90a66217dd4a7560a3ed8dacd2"
            mb={4}
          /> */}
          {/* <Experience
            side="Foundation"
            title="@bonhomme"
            href="https://foundation.app/@bonhomme?tab=owned"
            mb={4}
          /> */}
          {/* <Experience
            side="Twitter"
            title="@pixel_arts"
            href="https://twitter.com/pixel_arts"
            mb={4}
          /> */}
        </Box>
      </Box>
    </>
  )
}
