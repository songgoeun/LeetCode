/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
     const n = s.length;
    const prefix = Array(n + 1).fill(0);

    // Prefix Sum 업데이트 (누적 이동값 기록)
    for (const [start, end, direction] of shifts) {
        if (direction === 1) {
            prefix[start] += 1;       // 시작점에 +1
            prefix[end + 1] -= 1;    // 끝 다음 지점에 -1
        } else {
            prefix[start] -= 1;       // 시작점에 -1
            prefix[end + 1] += 1;    // 끝 다음 지점에 +1
        }
    }

    // Prefix Sum 계산 (최종 이동값 누적)
    for (let i = 1; i < n; i++) {
        prefix[i] += prefix[i - 1];
    }

    // // 결과 문자열 계산
    const result = [];
    for (let i = 0; i < n; i++) {
        const shift = prefix[i]; // 해당 인덱스에서 이동값
        const charCode = s.charCodeAt(i) - 97; // 현재 문자를 숫자로 변환 (0~25)
        const newCharCode = (charCode + shift) % 26; // 이동 적용
        result.push(String.fromCharCode((newCharCode + 26) % 26 + 97)); // 음수 방지
    }

    return result.join('');
};  