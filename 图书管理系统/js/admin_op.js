function addnews(){ window.location.href="admin_add_new.html";}
function addbook(){ window.location.href="admin_add_book.html";}
function delbook(){ window.location.href="admin_del_book.html";}
function admincenter(){ window.location.href="admin_new_op.html";}


function insertBooks(db,id,name,type,author,number,img,dateil){
	// db.transaction(function(tx){
	// 	tx.executeSql('insert into book values(?,?,?,?,?,?,?)',[id,name,type,author,number,img,dateil],function(tx,res){alert("插入图书成功！");},
	// 	function(tx,err){alert("失败");})
	// })
}