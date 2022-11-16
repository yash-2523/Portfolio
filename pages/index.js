import { Tooltip, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import AchievementsInfo from '../components/AchievementsInfo'
import EducationInfo from '../components/EducationInfo'
import EndingNote from '../components/EndingNote'
import ExperienceInfo from '../components/ExperienceInfo'
import PersonalInfo from '../components/PersonalInfo'
import ProjectsInfo from '../components/ProjectsInfo'
import SkillsInfo from '../components/SkillsInfo'
import styles from '../styles/Home.module.css'

export default function Home() {

  const alert = useAlert();

  const [chains,setChains] = useState({
    "0": false,
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false,
    "7": false,
    "8": false,
    "9": false,
    "10": false,
    "11": false,
  })

  const [blocks,setBlocks] = useState({
    "center": true,
    "0": false,
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
  })

  const [toolTip,setToolTip] = useState({
    "center": true,
    "0": false,
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
  })

  const personalInfoHandle = useFullScreenHandle();
  const employmentInfo = useFullScreenHandle();
  const projectsInfo = useFullScreenHandle();
  const educationInfo = useFullScreenHandle();
  const achievementsInfo = useFullScreenHandle();
  const skillsInfo = useFullScreenHandle();
  const endingNote = useFullScreenHandle();
  const [modalHandlers,setModalHandlers] = useState({
    "0": false,
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false
  });
  let handleBlockClick = (block) => {
    if(block===0){
      personalInfoHandle.enter();
    }else if(block === 1){
      employmentInfo.enter();
    } else if (block === 2){
      projectsInfo.enter()
    } else if(block === 3){
      educationInfo.enter()
    } else if (block === 4){
      achievementsInfo.enter()
    }else if (block === 5){
      skillsInfo.enter()
    }else if (block === 6){
      endingNote.enter()
    }
  }

  useEffect(() => {
    if(personalInfoHandle.active===false && modalHandlers["0"]){
      if(blocks["0"]===false){
        alert.success("New Blocked Mined!");
      }
      setBlocks({
        ...blocks,
        "0": true
      })
      setChains({
        ...chains,
        "0": true,
      })
    }
  }, [personalInfoHandle])
  useEffect(() => {
    if(employmentInfo.active===false && modalHandlers["1"]){
      if(blocks["2"]===false){
        alert.success("New Blocked Mined!");
      }
      setBlocks({
        ...blocks,
        "2": true
      })
      setChains({
        ...chains,
        "2": true,
        "7": true
      })
    }
  }, [employmentInfo])
  useEffect(() => {
    if(projectsInfo.active===false && modalHandlers["2"]){
      if(blocks["4"]===false){
        alert.success("New Blocked Mined!");
      }
      setBlocks({
        ...blocks,
        "4": true
      })
      setChains({
        ...chains,
        "5": true,
        "9": true
      })
    }
  }, [projectsInfo])
  useEffect(() => {
    if(educationInfo.active===false && modalHandlers["3"]){
      if(blocks["5"]===false){
        alert.success("New Blocked Mined!");
      }
      setBlocks({
        ...blocks,
        "5": true
      })
      setChains({
        ...chains,
        "1": true,
        "10": true
      })
    }
  }, [educationInfo])
  useEffect(() => {
    if(achievementsInfo.active===false && modalHandlers["4"]){
      if(blocks["3"]===false){
        alert.success("New Blocked Mined!");
      }
      setBlocks({
        ...blocks,
        "3": true
      })
      setChains({
        ...chains,
        "11": true,
        "4": true
      })
    }
  }, [achievementsInfo])
  useEffect(() => {
    if(skillsInfo.active===false && modalHandlers["5"]){
      if(blocks["1"]===false){
        alert.success("New Blocked Mined!");
      }
      setBlocks({
        ...blocks,
        "1": true
      })
      setChains({
        ...chains,
        "6": true,
        "3": true,
        "8": true
      })
    }
  }, [skillsInfo])

  return (
    <div className={styles['main']}>
        <div className={`text-center ${styles["title-container"]}`} style={{fontFamily: "Roboto", fontWeight: "900"}}>Yash's Blockchain</div>
        <div className={styles['content']}>
          
          <span className={styles['block-one-container']}>
            {chains['6'] && <Image className={`${styles['chain']} ${styles['chain-7']}`} src={"/chain.png"} width={50} height={50}></Image>}
            {chains['7'] && <Image className={`${styles['chain']} ${styles['chain-8']}`} src={"/chain.png"} width={50} height={50}></Image>}
            {<Image style={blocks['0'] ? {visibility: 'visible'} : {visibility: 'hidden'}} onClick={() => {handleBlockClick(1); setModalHandlers({...modalHandlers, "1": true})}} className={styles['block']} src={"/block.png"} width={50} height={50}></Image>}
          </span>
          <span className={styles['block-two-three-container']}>
            {<Image style={blocks['1'] ? {visibility: 'visible'} : {visibility: 'hidden'}} onClick={() => {handleBlockClick(6); setModalHandlers({...modalHandlers, "6": true})}} className={styles['block']} src={"/block.png"} width={50} height={50}></Image>}
            {<Image style={blocks['2'] ? {visibility: 'visible'} : {visibility: 'hidden'}} onClick={() => {handleBlockClick(2); setModalHandlers({...modalHandlers, "2": true})}} className={styles['block']} src={"/block.png"} width={50} height={50}></Image>}
            {chains['8'] && <Image className={`${styles['chain']} ${styles['chain-9']}`} src={"/chain.png"} width={50} height={50}></Image>}
            {chains['9'] && <Image className={`${styles['chain']} ${styles['chain-10']}`} src={"/chain.png"} width={50} height={50}></Image>}
          </span>
          <span className={styles['block-center-container']}>
            {chains['0'] && <Image className={`${styles['chain']} ${styles['chain-1']}`} src={"/chain.png"} width={50} height={50}></Image>}
            {chains['1'] && <Image className={`${styles['chain']} ${styles['chain-2']}`} src={"/chain.png"} width={50} height={50}></Image>}
            {chains['2'] && <Image className={`${styles['chain']} ${styles['chain-3']}`} src={"/chain.png"} width={50} height={50}></Image>}
            {chains['3'] && <Image className={`${styles['chain']} ${styles['chain-4']}`} src={"/chain.png"} width={50} height={50}></Image>}
            {chains['4'] && <Image className={`${styles['chain']} ${styles['chain-5']}`} src={"/chain.png"} width={50} height={50}></Image>}
            {chains['5'] && <Image className={`${styles['chain']} ${styles['chain-6']}`} src={"/chain.png"} width={50} height={50}></Image>}
            {<Image style={blocks['center'] ? {visibility: 'visible'} : {visibility: 'hidden'}} onClick={() => {handleBlockClick(0); setModalHandlers({...modalHandlers, "0": true})}} className={styles['block']} src={"/block.png"} width={50} height={50}></Image>}
          </span>
          <span className={styles['block-four-five-container']}>
            {<Image style={blocks['3'] ? {visibility: 'visible'} : {visibility: 'hidden'}} onClick={() => {handleBlockClick(5); setModalHandlers({...modalHandlers, "5": true})}} className={styles['block']} src={"/block.png"} width={50} height={50}></Image>}
            {<Image style={blocks['4'] ? {visibility: 'visible'} : {visibility: 'hidden'}} onClick={() => {handleBlockClick(3); setModalHandlers({...modalHandlers, "3": true})}} className={styles['block']} src={"/block.png"} width={50} height={50}></Image>}
          </span>
          <span className={styles['block-six-container']}>
            {<Image style={blocks['5'] ? {visibility: 'visible'} : {visibility: 'hidden'}} onClick={() => {handleBlockClick(4); setModalHandlers({...modalHandlers, "4": true})}} className={styles['block']} src={"/block.png"} width={50} height={50}></Image>}
            {chains['10'] && <Image className={`${styles['chain']} ${styles['chain-11']}`} src={"/chain.png"} width={50} height={50}></Image>}
            {chains['11'] && <Image className={`${styles['chain']} ${styles['chain-12']}`} src={"/chain.png"} width={50} height={50}></Image>}
          </span>
        </div> 
        <FullScreen handle={personalInfoHandle}>{personalInfoHandle.active && <PersonalInfo />}</FullScreen>
        <FullScreen handle={employmentInfo}>{employmentInfo.active && <ExperienceInfo />}</FullScreen>
        <FullScreen handle={projectsInfo}>{projectsInfo.active && <ProjectsInfo />}</FullScreen>
        <FullScreen handle={educationInfo}>{educationInfo.active && <EducationInfo />}</FullScreen>
        <FullScreen handle={achievementsInfo}>{achievementsInfo.active && <AchievementsInfo />}</FullScreen>
        <FullScreen handle={skillsInfo}>{skillsInfo.active && <SkillsInfo />}</FullScreen>
        <FullScreen handle={endingNote}>{endingNote.active && <EndingNote />}</FullScreen>
        
    </div>
  )
}
