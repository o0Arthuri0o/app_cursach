'use client'
import React from 'react'
import Image from 'next/image'
import './page.css'
import { createMonth } from './components/Calendar/helpers/createMonth'
import { createYear } from './components/Calendar/helpers/createYear'
import {Calendar} from './components/Calendar/Calendar'
import { formatDate } from './components/Calendar/helpers'
import Link from 'next/link'

export default function Home() {
	

	return (
		<div className='main__container'>
			<h1>Приложение для онлайн записи</h1>
			<p>Приложение, разрабатываемое студентам ГУАП в рамках учебного проекта</p>
			<div className='link__container'>
				<button><Link href='/pages/Log_in' >Регистрация</Link></button>
				<button><Link href='/pages/Sign_in' >Авторизация</Link></button>

			</div>
			
			<ul >
				<p>Авторы</p>
				<li>Жаринов Георгий </li>
				<li>Новиков Данила</li>
				<li>Хусаинов Артур</li>
			</ul>
	  	</div>
			//<Calendar selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)} />

	)
}
