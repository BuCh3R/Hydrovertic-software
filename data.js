let dataSet = new Array(100);

function addData(min, h, d, m, y, v) {
    list = {minute: min, hour: h, day: d, month: m, year: y, value: v};
    dataSet.push(list);
}

function createData( ){ 
    for (let i = 0; i < dataSet.length; i++) {
        let min = 0;
        let h = 0;
        let d = 1; 
        let months = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let m = 0;
        let y = 2023; 
        addData(min, h, d, m, y, Math.floor(Math.random) * 10);  
        console.log (d)
        min += 15; 
        if ( !(min < 60)  ) {
            min = 0;
            h ++; 
            if ( !(h < 24) ) {
                h = 0;
                d ++;
                if ( d > months[m])  {
                    d = 1; 
                    m ++;
                    if ( !( m < months.length ) ) {
                        m = 1;
                        y ++;
                    }
                }
                    
            }
            
        }

    }
    
}
createData ();