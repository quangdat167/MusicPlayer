/**
 * 1. Render songs -> OK
 * 2. Scroll top -> OK
 * 3. Play / pause / seek -> OK
 * 4. CD rotate -> OK
 * 5. Next / previous -> OK
 * 6. Random -> OK
 * 7. Next / Repeat when ended -> OK
 * 8. Active song -> OK
 * 9. Scroll active song into view
 * 10. Play song when click
 */


	const $ = document.querySelector.bind(document)
	const $$ = document.querySelectorAll.bind(document)

	const allSong = $$('.song')
	
	const totalAudio = $('.time-audio')
	const timeHover = $('.time-hover')
	const cd = $('.cd')
	const heading = $('header h2')
	const cdThumb = $('.cd .cd-thumb')
	const audio = $('#audio')
	const playBtn = $('.btn-toggle-play')
	const player = $('.player')
	const progress = $('#progress')
	const nextBtn = $('.btn-next')
	const prevBtn = $('.btn-prev')
	const randomBtn = $('.btn-random')
	const repeatBtn = $('.btn-repeat')
	const dashboard = $('.dashboard')

	const app = {
		currenIndex: 0,
		isPlaying: false,
		isRandom: false,
		isRepeat: false,

		songs: [
			{
				name: 'Waiting for du',
				singer: 'MOLO',
				path: 'https://audio.jukehost.co.uk/T9NTNQJh7kCFVX77ZO8BoITWjli00k4Q',
				image: './assetss/image/1.jpg'
			},
			{
				name: 'In the name of love',
				singer: 'MARTIN GARIX X BEBE REXHA',
				path: 'https://audio.jukehost.co.uk/Ww2CXsanXtQsUZfNvE8pxbuHIvQwwgjq',
				image: './assetss/image/2.jpg'
			},
			{
				name: 'Santa tell me',
				singer: 'TATUM',
				path: 'https://audio.jukehost.co.uk/JkiUDSPcEw6onVRI6rozH9mKkBB0HKJU',
				image: './assetss/image/3.jpg'
			},
			{
				name: 'Độ Tộc 2',
				singer: 'ĐỘ MIXI x Phúc Du x Pháo x Masew',
				path: 'https://audio.jukehost.co.uk/gWgIRaivqAUqsztPAhFu9xFZIpLWN0zX',
				image: './assetss/image/4.jpg'
			},
			{
				name: 'Stream đến bao giờ',
				singer: 'ĐỘ MIXI',
				path: 'https://audio.jukehost.co.uk/FOZUkSfMH1LyfTdcE1kmiHPM2hAtfwdJ',
				image: './assetss/image/5.jpg'
			},
			{
				name: 'Đạo lý tình yêu',
				singer: 'Độ Lý',
				path: 'https://audio.jukehost.co.uk/81zcK2ZhYSykveiAxDpsZdaw1qBTvRFl',
				image: './assetss/image/6.jpg'
			},
			{
				name: 'Cách tán CRUSH',
				singer: 'MIXI tán gái',
				path: 'https://audio.jukehost.co.uk/ern540dlzO4IjpL0WPYuZ70f8sv2BLNA',
				image: './assetss/image/7.jpg'
			},
			{
				name: 'Bên trên tầng lầu',
				singer: 'Giấu tên',
				path: 'https://audio.jukehost.co.uk/voPD8l4y2MtgXMEaTQLjuNGKfd6fScST',
				image: './assetss/image/8.jpg'
			},
			{
				name: 'Phải có người yêu',
				singer: 'Độ người yêu',
				path: 'https://audio.jukehost.co.uk/w0T6Qm0Wa5Exbckw0NBYPzLRVdoC0XaW',
				image: './assetss/image/9.jpg'
			},
			{
				name: 'REMIX',
				singer: 'DATTO SAN',
				path: 'https://audio.jukehost.co.uk/UJQC1L2VtxB1VJUXrirPV2nd0esR3TTq',
				image: './assetss/image/10.jpg'
			},
			{
				name: 'Viet Deep #20',
				singer: 'MEDIA_MusicPro',
				path: 'https://audio.jukehost.co.uk/pZKDz3ojTleZ5P0oVbolQ6qZ9cTApVcZ',
				image: './assetss/image/11.png'
			},
			{
				name: 'THE ONE THAT GOT AWAY REMIX ',
				singer: '( TRUNG HOÀNG MIX ) HOT TIK TOK 2022',
				path: 'https://audio.jukehost.co.uk/aqyXf57JMOuOiL1UYxdSVIyaVKwEiJhV',
				image: './assetss/image/12.jpg'
			},
			{
				name: 'HOUSE LAK - DON\'T STOP - MIXSET',
				singer: 'TeA DEEP',
				path: 'https://audio.jukehost.co.uk/GpiaGGM4glp7dI5ik7o6TyREMAeqAgtw',
				image: './assetss/image/13.png'
			},
			{
				name: 'HOUSE LAK 2022 - LAK WITH SOI DOLCE IN DA HEY Vol.2',
				singer: 'TeA DEEP',
				path: 'https://audio.jukehost.co.uk/9Gx7683oWxXsYKCB35CIbWvnti7EOcun',
				image: './assetss/image/14.png'
			},
			{
				name: 'Deep House 2021 - Việt Mix Chuyện Tình Willzi | Deep Chill',
				singer: 'TeA DEEP',
				path: 'https://audio.jukehost.co.uk/1eGwSkq9cg8B2CuMunrjDwM4PSY394Xp',
				image: './assetss/image/15.png'
			},
			{
				name: 'Mắt Em Nhòa Đi Mascara ( DJ Long Nhật ) - Đạt Con Mix',
				singer: 'PHÚ THỌ BAY',
				path: 'https://audio.jukehost.co.uk/GU34oKgF1ldD7L9xvRxC2Dh6v7m80ObZ',
				image: './assetss/image/16.png'
			},
			{
				name: 'HOUSE LAK - THANH NIÊN | ANNIVERSARY - NBC',
				singer: 'TeA DEEP',
				path: 'https://audio.jukehost.co.uk/1IxR784CThbI21lbLigVCYg945TpMrOB',
				image: './assetss/image/17.png'
			},
			{
				name: 'MIXTAPE - VIET DEEP CHỈ CÒN MỘT ĐÊM CUỐI',
				singer: 'Trinh Minh Phuc',
				path: 'https://audio.jukehost.co.uk/YsZ6qDhKWVUYXByklPOjFdhceQFzzhfN',
				image: './assetss/image/18.png'
			},
			{
				name: 'MIXTAPE - VIET DEEP XA ANH CHẬM CHẬM THÔI',
				singer: 'Trinh Minh Phuc',
				path: 'https://audio.jukehost.co.uk/wzw3GdzFGe9QQRs0cNi7ZrU4Tx7xI0jZ',
				image: './assetss/image/19.png'
			},
			{
				name: 'VIET DEEP 2022 - RẰNG EM MÃI Ở BÊN X NHƯ ANH ĐÃ THẤY EM',
				singer: 'Deluxe Music',
				path: 'https://audio.jukehost.co.uk/8Bpq95lmEuiJUBBNMTpmlIHmmzq3INSe',
				image: './assetss/image/20.png'
			},
			{
				name: 'VIET DEEP 2022 - THỜI GIAN SẼ TRẢ LỜI X CHIẾC KHĂN GIÓ ẤM',
				singer: 'Deluxe Music',
				path: 'https://audio.jukehost.co.uk/Rs1wxf0XeVYACUirLHp4QJmzvpTIR2GU',
				image: './assetss/image/21.png'
			},
			{
				name: 'HOUSE LAK 2022 - Thăng Trầm | Slow Down',
				singer: 'TeA DEEP',
				path: 'https://audio.jukehost.co.uk/AgdgaCvSRoNAFOA5t81sQYEGZwMs2xPB',
				image: './assetss/image/22.png'
			},
			{
				name: 'MIXTAPE - HOUSE LAK | SO FAR AWAY - 1500 STROKES',
				singer: 'Trinh Minh Phuc',
				path: 'https://audio.jukehost.co.uk/FBKoedI9QpLrVeVzMUeBG7XMYsSbdsRw',
				image: './assetss/image/23.png'
			},
			{
				name: 'VIET DEEP 2022 - RẰNG EM MÃI Ở BÊN REMIX',
				singer: 'Deluxe Music',
				path: 'https://audio.jukehost.co.uk/1HhhLRJvUFADFKcbsMIIby2HpLOsQm0d',
				image: './assetss/image/24.png'
			},
			{
				name: 'House Lak Nhà Làm - Thương em đến già By HoangMP Mix (ND Team)',
				singer: 'MEDIA_MusicPro',
				path: 'https://audio.jukehost.co.uk/vDzz9Y1mpRLBolq2twF3daWDfl782w90',
				image: './assetss/image/25.png'
			},
			
		],

		render: function() {
			const htmls = this.songs.map((song, index) => {
				return `
				<div class="song" id="song-${index}">
					<div class="thumb" 
						style="background-image: url('${song.image}')">
					</div>
					<div class="body">
						<h3 class="title">${song.name}</h3>
						<p class="author">${song.singer}</p>
					</div>
					<div class="option">
						<i class="fas fa-ellipsis-h"></i>
					</div>
				</div>
				`
			})
			$('.playlist').innerHTML = htmls.join('')

		},
		defineProperties: function() {
			Object.defineProperty(this, 'currentSong', {
				get: function() {
					return this.songs[this.currenIndex]
				}
			})
		},

		// Thanh thời gian Audio
			
		loadTimeAudio: 
			function() {
				setInterval(function() {
					{ // Thủ công
					const totalHour = Math.floor(audio.duration / 3600)
					let totalMinute = Math.floor((audio.duration - totalHour*3600) / 60)
					let totalSecond = Math.floor(audio.duration - totalHour*3600 - totalMinute * 60)
					
					const currentHour = Math.floor(audio.currentTime / 3600)
					let currentMin = Math.floor((audio.currentTime - currentHour*3600) / 60)
					let currentSec = Math.floor(audio.currentTime - currentHour*3600 - currentMin * 60)
					
					totalSecond = totalSecond < 10 ? ('0' + totalSecond) : totalSecond
					currentSec = currentSec < 10 ? ('0' + currentSec) : currentSec
					totalMinute = totalMinute < 10 ? ('0' + totalMinute) : totalMinute
					currentMin = currentMin < 10 ? ('0' + currentMin) : currentMin
					let totalTime = ``
					if (totalHour != 0 ) totalTime = `${currentHour}:${currentMin}:${currentSec} / ${totalHour}:${totalMinute}:${totalSecond}`
					
					else totalTime = `${currentMin}:${currentSec} / ${totalMinute}:${totalSecond}`
					if(!isNaN(totalSecond))
					totalAudio.textContent = totalTime
					else totalAudio.textContent = 'Loading...'
					}
				// Ẩn time-hover
				timeHover.style.display = 'none'

					// Định dạng HH:MM:SS
					// if(audio.duration > 3600) {
					// 	const totalTime = new Date(audio.duration * 1000).toISOString().substr(12, 7);
					// 	const currentTime = new Date(audio.currentTime * 1000).toISOString().substr(12, 7);
					// } else { // MM:SS
					// 	const totalTime = new Date(audio.duration * 1000).toISOString().substr(14, 5);
					// 	const currentTime = new Date(audio.currentTime * 1000).toISOString().substr(14, 5);
					// }
					// console.log(totalTime)
					// totalAudio.textContent = `${currentTime} / ${totalTime}`	
				}, 1000)
				
			},
		
		handleEvents: function() {
			const _this = this
			const cdWidth = cd.offsetWidth

			// CD quay / stop
			const cdThumbAnimate = cdThumb.animate([
				{
					transform: 'rotate(360deg)'
				}
			], {
				duration: 10000,
				iterations: Infinity
			})
			cdThumbAnimate.pause()


			// Scroll top
			document.onscroll= function() {
				const scrollTop = window.scrollY || document.documentElement.scrollTop
				const newCdWidth = cdWidth - scrollTop

				cd.style.width = newCdWidth >=0 ? newCdWidth + 'px' : 0
				cd.style.opacity = newCdWidth / cdWidth 
			}
			audio.onplay = function() {
				_this.isPlaying = true
				player.classList.add('playing')
				cdThumbAnimate.play()
			}
			audio.onpause = function() {
				_this.isPlaying = false
				player.classList.remove('playing')
				cdThumbAnimate.pause()
			}
			// Play / Pause 
			playBtn.onclick = function() {
				
				if (_this.isPlaying) {
					audio.pause()
				} else {
					audio.play()
				}
				audio.onplay()
				audio.onpause()

			}

			// Tua bai hat
			audio.ontimeupdate = function() {
				let value = 0;
				if(!isNaN( audio.currentTime / audio.duration)) {
					value = audio.currentTime / audio.duration *100
				}
				progress.value = value;
			}
				

			// Tua bai hat
			progress.oninput = function() {
				let seekTime = progress.value / 100 * audio.duration
				audio.currentTime = seekTime

				// Khi trỏ chuột hiển thị thời gian sẽ tua đến
				let timeAudioHover = (Math.floor(seekTime))
					
				const currentHour = Math.floor(timeAudioHover / 3600)
				let currentMin = Math.floor((timeAudioHover - currentHour*3600) / 60)
				let currentSec = Math.floor(timeAudioHover - currentHour*3600 - currentMin * 60)

				currentSec = currentSec < 10 ? ('0' + currentSec) : currentSec
				currentMin = currentMin < 10 ? ('0' + currentMin) : currentMin

				if (currentHour != 0 ) totalTime = `${currentHour}:${currentMin}:${currentSec}`
				else totalTime = `${currentMin}:${currentSec}`

				timeHover.textContent = totalTime
				timeHover.style.display = 'block'
			}


			// Khi thả chuột sẽ ẩn time-hover
			// progress.onmouseup = function(){
			// 	timeHover.style.display = 'none'
			// }

			// let currentValue = progress.value
			// progress.onmousemove = function() {
			// 	if(progress.value !== currentValue) {
			// 		let timeAudioHover = (Math.floor(progress.value / 100 * audio.duration))
					
			// 		const currentHour = Math.floor(timeAudioHover / 3600)
			// 		let currentMin = Math.floor((timeAudioHover - currentHour*3600) / 60)
			// 		let currentSec = Math.floor(timeAudioHover - currentHour*3600 - currentMin * 60)

			// 		currentSec = currentSec < 10 ? ('0' + currentSec) : currentSec
			// 		currentMin = currentMin < 10 ? ('0' + currentMin) : currentMin

			// 		if (currentHour != 0 ) totalTime = `${currentHour}:${currentMin}:${currentSec}`
					
			// 		else totalTime = `${currentMin}:${currentSec}`

			// 		timeHover.textContent = totalTime
			// 		timeHover.style.display = 'block'
			// 	}
			// 	currentValue = progress.value
			// }


			// NEXT song
			nextBtn.onclick = () => {
				if(_this.isRandom) {
					_this.playRandomSong()
				} else {
					_this.nextSong()
				}
				audio.onplay()
				audio.play()
			}
			//PREVIOUS SONG
			prevBtn.onclick = () => {
				if(_this.isRandom) {
					_this.playRandomSong()
				} else {
					_this.prevSong()
				}
				audio.onplay()
				audio.play()
			}

			// Xử lý Bật/Tắt RANDOM song
			randomBtn.onclick = function() {
				_this.isRandom = !_this.isRandom
				randomBtn.classList.toggle('active')
			}

			repeatBtn.onclick = function() {
				_this.isRepeat = !_this.isRepeat
				repeatBtn.classList.toggle('active')
			}
			
			//Repet Song when ended
			audio.onended = function() {
				if(_this.isRepeat) {
					audio.play()
				} else {
					nextBtn.onclick()
				}
			}

			//Play Song when click
			const allSong = $$('.song')
			allSong.forEach(function(song, index) {
				song.onclick = function(event) {
					if(event.target.classList.value === 'option' || event.target.classList.value === 'fas fa-ellipsis-h' 
						|| index === _this.currenIndex)
						return;
					_this.changeActiveSong(false)
					_this.currenIndex = index
					_this.loadCurrentSong()
					audio.onplay()
					audio.play()
				}
			})
			





		},
		loadCurrentSong: function() {
			heading.textContent = this.currentSong.name
			cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
			audio.src = this.currentSong.path
			this.changeActiveSong(true)
			this.loadTimeAudio()


		},

		changeActiveSong: function(active) {
			const isSongStr = `#song-${this.currenIndex}`
			const idSong = $(isSongStr)
			if(active)
			idSong.classList.add('active')
			else
			idSong.classList.remove('active')

		},
		
		nextSong: function() {
			this.changeActiveSong(false)
			this.currenIndex++
			if(this.currenIndex >= this.songs.length) this.currenIndex = 0
			
			this.loadCurrentSong()
		},
		
		prevSong: function() {
			this.changeActiveSong(false)
			this.currenIndex--
			if(this.currenIndex == -1) this.currenIndex = this.songs.length - 1
				this.loadCurrentSong()
		},

		playRandomSong: function() {
			this.changeActiveSong(false)
			let newCurrentIndex 
			do {
				newCurrentIndex = Math.floor(Math.random() * this.songs.length)
			} while (this.currenIndex == newCurrentIndex)

			this.currenIndex = newCurrentIndex
			this.loadCurrentSong()
		},

		
		
		
		start: function() {

			//Định nghĩa các thuộc tính cho Object
			this.defineProperties()
			
			// Render playlist
			this.render()
			
			// Lắng nghe/ Xử lý các event
			this.handleEvents()

			
			// Tải bài hát đầu tiên vào UI
			this.loadCurrentSong()

		},

	}

	app.start()
