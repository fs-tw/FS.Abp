
export class IdentificationNumberChecker {
    public static checkID(id: string): boolean {
        if(!id) return false;
        let tab = "ABCDEFGHJKLMNPQRSTUVXYWZIO"
        let A1 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3);
        let A2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5);
        let Mx = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 1);

        if (id.length != 10) return false;
        let i = tab.indexOf(id.charAt(0));
        if (i == -1) return false;
        let sum = A1[i] + A2[i] * 9;

        for (i = 1; i < 10; i++) {
            let v = parseInt(id.charAt(i));
            if (isNaN(v)) return false;
            sum = sum + v * Mx[i];
        }
        if (sum % 10 != 0) return false;
        return true;
    }
}