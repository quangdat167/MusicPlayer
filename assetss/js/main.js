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
	
	const totalAudio = $('.time-audio')
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

	const app = {
		currenIndex: 14,
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
				path: './assetss/music/2.mp3',
				image: './assetss/image/2.jpg'
			},
			{
				name: 'Santa tell me',
				singer: 'TATUM',
				path: './assetss/music/3.mp3',
				image: './assetss/image/3.jpg'
			},
			{
				name: 'Độ Tộc 2',
				singer: 'ĐỘ MIXI x Phúc Du x Pháo x Masew',
				path: './assetss/music/4.mp3',
				image: './assetss/image/4.jpg'
			},
			{
				name: 'Stram đến bao giờ',
				singer: 'ĐỘ MIXI',
				path: './assetss/music/5.mp3',
				image: './assetss/image/5.jpg'
			},
			{
				name: 'Đạo lý tình yêu',
				singer: 'Độ Lý',
				path: './assetss/music/6.mp3',
				image: './assetss/image/6.jpg'
			},
			{
				name: 'Cách tán CRUSH',
				singer: 'MIXI tán gái',
				path: './assetss/music/7.mp3',
				image: './assetss/image/7.jpg'
			},
			{
				name: 'Bên trên tầng lầu',
				singer: 'Giấu tên',
				path: './assetss/music/8.mp3',
				image: './assetss/image/8.jpg'
			},
			{
				name: 'Phải có người yêu',
				singer: 'Độ người yêu',
				path: './assetss/music/9.mp3',
				image: './assetss/image/9.jpg'
			},
			{
				name: 'REMIX',
				singer: 'DATTO SAN',
				path: './assetss/music/10.mp3',
				image: './assetss/image/10.jpg'
			},
			{
				name: 'Viet Deep #20',
				singer: 'MEDIA_MusicPro',
				path: './assetss/music/11.mp3',
				image: './assetss/image/11.png'
			},
			{
				name: 'THE ONE THAT GOT AWAY REMIX ',
				singer: '( TRUNG HOÀNG MIX ) HOT TIK TOK 2022',
				path: './assetss/music/12.mp3',
				image: './assetss/image/12.jpg'
			},
			{
				name: 'HOUSE LAK - DON\'T STOP - MIXSET',
				singer: 'TeA DEEP',
				path: './assetss/music/13.mp3',
				image: './assetss/image/13.png'
			},
			{
				name: 'HOUSE LAK 2022 - LAK WITH SOI DOLCE IN DA HEY Vol.2',
				singer: 'TeA DEEP',
				path: './assetss/music/14.mp3',
				image: './assetss/image/14.png'
			},
			{
				name: 'Deep House 2021 - Việt Mix Chuyện Tình Willzi | Deep Chill',
				singer: 'TeA DEEP',
				path: './assetss/music/15.mp3',
				image: './assetss/image/15.png'
			},
			{
				name: 'Mắt Em Nhòa Đi Mascara ( DJ Long Nhật ) - Đạt Con Mix',
				singer: 'PHÚ THỌ BAY',
				path: './assetss/music/16.mp3',
				image: './assetss/image/16.png'
			},
			{
				name: 'HOUSE LAK - THANH NIÊN | ANNIVERSARY - NBC',
				singer: 'TeA DEEP',
				path: './assetss/music/17.mp3',
				image: './assetss/image/17.png'
			},
			{
				name: 'MIXTAPE - VIET DEEP CHỈ CÒN MỘT ĐÊM CUỐI',
				singer: 'Trinh Minh Phuc',
				path: './assetss/music/18.mp3',
				image: './assetss/image/18.png'
			},
			{
				name: 'MIXTAPE - VIET DEEP XA ANH CHẬM CHẬM THÔI',
				singer: 'Trinh Minh Phuc',
				path: './assetss/music/19.mp3',
				image: './assetss/image/19.png'
			},
			{
				name: 'VIET DEEP 2022 - RẰNG EM MÃI Ở BÊN X NHƯ ANH ĐÃ THẤY EM',
				singer: 'Deluxe Music',
				path: './assetss/music/20.mp3',
				image: './assetss/image/20.png'
			},
			{
				name: 'VIET DEEP 2022 - THỜI GIAN SẼ TRẢ LỜI X CHIẾC KHĂN GIÓ ẤM',
				singer: 'Deluxe Music',
				path: './assetss/music/21.mp3',
				image: './assetss/image/21.png'
			},
			{
				name: 'HOUSE LAK 2022 - Thăng Trầm | Slow Down',
				singer: 'TeA DEEP',
				path: './assetss/music/22.mp3',
				image: './assetss/image/22.png'
			},
			{
				name: 'MIXTAPE - HOUSE LAK | SO FAR AWAY - 1500 STROKES',
				singer: 'Trinh Minh Phuc',
				path: './assetss/music/23.mp3',
				image: './assetss/image/23.png'
			},
			{
				name: 'VIET DEEP 2022 - RẰNG EM MÃI Ở BÊN REMIX',
				singer: 'Deluxe Music',
				path: './assetss/music/24.mp3',
				image: './assetss/image/24.png'
			},
			{
				name: 'House Lak Nhà Làm - Thương em đến già By HoangMP Mix (ND Team)',
				singer: 'MEDIA_MusicPro',
				path: './assetss/music/25.mp3',
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
		loadTimeAudio: setInterval(function() {
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
			totalAudio.textContent = totalTime
			}
			
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
		}, 1000),
		
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
			// Play / Pause 
			playBtn.onclick = function() {
				
				if (_this.isPlaying) {
					audio.pause()
				} else {
					audio.play()
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
			}

			// Tua bai hat
			audio.ontimeupdate = function() {
				progress.value = audio.currentTime / audio.duration *100
			}
			progress.onclick = function() {
				let seekTime = progress.value / 100 * audio.duration
				audio.currentTime = seekTime
			}

			// NEXT song
			nextBtn.onclick = () => {
				if(_this.isRandom) {
					_this.playRandomSong()
				} else {
					_this.nextSong()
				}
				audio.onplay = function() {
					_this.isPlaying = true
					player.classList.add('playing')
				}
				audio.play()
			}
			//PREVIOUS SONG
			prevBtn.onclick = () => {
				if(_this.isRandom) {
					_this.playRandomSong()
				} else {
					_this.prevSong()
				}
				audio.onplay = function() {
					_this.isPlaying = true
					player.classList.add('playing')
				}
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
			
			audio.onended = function() {
				if(_this.isRepeat) {
					audio.play()
				} else {
					nextBtn.onclick()
				}
			}




		},
		loadCurrentSong: function() {
			heading.textContent = this.currentSong.name
			cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
			audio.src = this.songs[this.currenIndex].path
			this.changeActiveSong(true)


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
			
			this.render()
			// Lắng nghe/ Xử lý các event

			this.handleEvents()

			// Tải bài hát đầu tiên vào UI
			
			// Render playlist
			this.loadCurrentSong()

		},

	}

	app.start()
