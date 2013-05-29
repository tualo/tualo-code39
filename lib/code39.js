// 
var Code39 = function(){
}

Code39.prototype.getCode=function(data){
	var charHash={};
	charHash['0'] = 'nnnwwnwnn';
	charHash['1'] = 'wnnwnnnnw';
	charHash['2'] = 'nnwwnnnnw';
	charHash['3'] = 'wnwwnnnnn';
	charHash['4'] = 'nnnwwnnnw';
	charHash['5'] = 'wnnwwnnnn';
	charHash['6'] = 'nnwwwnnnn';
	charHash['7'] = 'nnnwnnwnw';
	charHash['8'] = 'wnnwnnwnn';
	charHash['9'] = 'nnwwnnwnn';
	charHash['A'] = 'wnnnnwnnw';
	charHash['B'] = 'nnwnnwnnw';
	charHash['C'] = 'wnwnnwnnn';
	charHash['D'] = 'nnnnwwnnw';
	charHash['E'] = 'wnnnwwnnn';
	charHash['F'] = 'nnwnwwnnn';
	charHash['G'] = 'nnnnnwwnw';
	charHash['H'] = 'wnnnnwwnn';
	charHash['I'] = 'nnwnnwwnn';
	charHash['J'] = 'nnnnwwwnn';
	charHash['K'] = 'wnnnnnnww';
	charHash['L'] = 'nnwnnnnww';
	charHash['M'] = 'wnwnnnnwn';
	charHash['N'] = 'nnnnwnnww';
	charHash['O'] = 'wnnnwnnwn'; 
	charHash['P'] = 'nnwnwnnwn';
	charHash['Q'] = 'nnnnnnwww';
	charHash['R'] = 'wnnnnnwwn';
	charHash['S'] = 'nnwnnnwwn';
	charHash['T'] = 'nnnnwnwwn';
	charHash['U'] = 'wwnnnnnnw';
	charHash['V'] = 'nwwnnnnnw';
	charHash['W'] = 'wwwnnnnnn';
	charHash['X'] = 'nwnnwnnnw';
	charHash['Y'] = 'wwnnwnnnn';
	charHash['Z'] = 'nwwnwnnnn';
	charHash['-'] = 'nwnnnnwnw';
	charHash['.'] = 'wwnnnnwnn';
	charHash[' '] = 'nwwnnnwnn';
	charHash['*'] = 'nwnnwnwnn';
	charHash['$'] = 'nwnwnwnnn';
	charHash['/'] = 'nwnwnnnwn';
	charHash['+'] = 'nwnnnwnwn';
	charHash['%'] = 'nnnwnwnwn';
	data = '*'+data.toUpperCase()+'*';
	var result='';
	for(var i=0; i<data.length; i++){
		if (typeof charHash[data.charAt(i)]==='undefined'){
			throw new Error('invalid character at position '+i);
		}else{
			var sequence = charHash[data.charAt(i)];
			for (var j=0;j<9;j++){
				var bt = sequence.charAt(j);
				if (j%2==0){
					bt = bt.toUpperCase();
				}
				result+=bt;
			}
		}
		result+='n';
	}
	return result;
}
exports.Code39 = Code39;