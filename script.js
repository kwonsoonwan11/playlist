// DOM 요소 선택
const songTitleInput = document.getElementById('song-title');
const songArtistInput = document.getElementById('song-artist');
const addSongBtn = document.getElementById('add-song-btn');
const playlist = document.getElementById('playlist');

// 플레이리스트 배열
let playlistArray = [];

// 곡 추가 함수
function addSong() {
    const title = songTitleInput.value.trim();
    const artist = songArtistInput.value.trim();

    if (title && artist) {
        // 곡 객체 생성
        const song = {
            title: title,
            artist: artist,
            audioFile: null, // 음원 파일은 나중에 추가
            silenceDuration: 0 // 공백 시간
        };

        // 배열에 추가
        playlistArray.push(song);

        // UI 업데이트
        updatePlaylistUI();
        
        // 입력 필드 초기화
        songTitleInput.value = '';
        songArtistInput.value = '';
    } else {
        alert("곡 제목과 아티스트를 입력하세요.");
    }
}

// UI 업데이트 함수
function updatePlaylistUI() {
    playlist.innerHTML = ''; // 기존 목록 초기화
    playlistArray.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        playlist.appendChild(li);
    });
}

// 버튼 클릭 이벤트 리스너
addSongBtn.addEventListener('click', addSong);

// 음원 파일 추가 및 편집 기능 (추가 구현 필요)
// 예를 들어: 음원 파일을 추가하고, 공백 시간 추가하는 UI 구성