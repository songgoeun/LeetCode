/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
     const n = s.length;
    const seen = new Set();
    const left = new Array(26).fill(0);
    const right = new Array(26).fill(0);

    for (let char of s) {
        right[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < n; i++) {
        const midChar = s[i];
        // s[i] 번째의 유니코드 - a의 유니코드
        // c = 99 / a = 97 = 99 - 97 = 2
        const midIndex = midChar.charCodeAt(0) - 'a'.charCodeAt(0);
    
        right[midIndex]--;

        // 양쪽에서 동일한 문자를 찾음
        for (let j = 0; j < 26; j++) {
            if (left[j] > 0 && right[j] > 0) {
                // fromCharCode는 반대로 숫자를 넣으면 'a'로 나옴
                const char = String.fromCharCode(j + 'a'.charCodeAt(0));
                seen.add(char + midChar + char);
            }
        }

        // 현재 문자를 왼쪽 빈도에 추가
        left[midIndex]++;
    }

    return seen.size;
};