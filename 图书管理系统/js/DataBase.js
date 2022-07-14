function createTable(db) {
	db.transaction(function(tx) {
		tx.executeSql(
			'create table if not exists users(username TEXT,password TEXT,tell TEXT,email TEXT,booknumber TEXT,userpic TEXT)',
			[],
			function(tx, res) {},
			function(tx, err) {
				alert(err.message)
			});
		tx.executeSql('create table if not exists admin(Adname TEXT,Adpassword TEXT,permission TEXT)', [],
			function(tx, res) {},
			function(tx, err) {
				alert(err.message)
			});
		tx.executeSql(
			'create table if not exists borrow(username TEXT,book_1 TEXT,book_2 TEXT,book_3 TEXT,password INT)',
			[],
			function(tx, res) {},
			function(tx, err) {
				alert(err.message)
			});
		tx.executeSql(
			'create table if not exists book(bookid TEXT,bookname TEXT,booktype TEXT,bookauthor TEXT,booknumber INT,bookpic TEXT,detail TEXT)',
			[],
			function(tx, res) {},
			function(tx, err) {
				alert(err.message)
			});
		tx.executeSql(
			'create table if not exists lib_msg(newid TEXT,newTit TEXT,newData TEXT,newPic TEXT,detail TEXT)',
			[],
			function(tx, res) {},
			function(tx, err) {
				alert(err.message)
			});
	})
}

function insertdata(db) {
	db.transaction(function(tx) {
		// tx.executeSql('insert into admin values(?,?,?)',['test2','112233','user'],function(tx,rs){},function(tx,err){alert("失败");})
		tx.executeSql('insert into users values(?,?,?,?,?,?)', ['user1', '111111','15959996236', '0','2507272605@qq.com','p_1.jpg'], 
		function(tx,rs) {alert("成功插入用户")},
		 function(tx, err) {
			alert("失败");
		})

		// tx.executeSql('insert into users values(?,?,?,?)', ['user2', '12345678922', '111111', '1'], function(tx,
		// 	rs) {}, function(tx, err) {
		// 	alert("失败");
		// })
		// tx.executeSql('insert into users values(?,?,?,?)', ['user3', '12345678933', '111111', '1'], function(tx,
		// 	rs) {}, function(tx, err) {
		// 	alert("失败");
		// })
		// tx.executeSql('insert into users values(?,?,?,?)', ['user4', '12345678944', '111111', '1'], function(tx,
		// 	rs) {}, function(tx, err) {
		// 	alert("失败");
		// })
		// tx.executeSql('insert into users values(?,?,?,?)', ['user5', '12345678955', '111111', '1'], function(tx,
		// 	rs) {}, function(tx, err) {
		// 	alert("失败");
		// })
		// tx.executeSql('insert into users values(?,?,?,?)', ['user6', '12345678966', '111111', '1'], function(tx,
		// 	rs) {}, function(tx, err) {
		// 	alert("失败");
		// })
		// tx.executeSql('insert into users values(?,?,?,?)', ['user7', '12345678977', '111111', '1'], function(tx,
		// 	rs) {}, function(tx, err) {
		// 	alert("失败");
		// })
		tx.executeSql('insert into admin values(?,?,?)', ['admin1', '112233', 'A01'], function(tx, rs) {
			alert("插入管理员成功！");
		}, function(tx, err) {})


		tx.executeSql('insert into book values(?,?,?,?,?,?,?)', ['C001', '小彗星旅行记', '科普类', '徐刚', '3', 'c_1.jpg','向往光明温暖的小彗星哈伊，在“好运气”的帮助下，历尽艰辛，穿越太阳系，沿途拜访了海王星、天王星、土星、木星、火星、地球、金星和水星，终于见到了向往已久的太阳。读了这本书，相信小朋友一定能够爱上小彗星、爱上天文。'],
			function(tx, rs) {
				alert("插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
		tx.executeSql('insert into book values(?,?,?,?,?,?,?)', ['C002', '冰冻星球 超乎想象的奇妙世界', '科普类', '【英】阿拉斯泰尔','2', 'c_2.jpg', '冰冻的海洋和恶劣的气候将两极与其他地区隔离开来，两极的很多动物仅存活于此。如今两极地区都在慢慢融化，给这里的生命带来了深远的影响'],
			function(tx, rs) {
				alert("插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
		tx.executeSql('insert into book values(?,?,?,?,?,?,?)', ['C003', '数学花园漫游记', '科普类', '马希文', '2','c_3.jpg','如果我们住在土星的光环上通向“色数”的桥梁——欧拉公式四色问题的副产品——莫比乌斯环试验田里的数学如果找不到大块田 再走一步——回到了几何学中图的世界最短路程问题'],
			function(tx, rs) {
				alert("插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
		tx.executeSql('insert into book values(?,?,?,?,?,?,?)', ['C004', '小熊和最好的爸爸', '童书类', '阿兰德·丹姆', '2','c_4.jpg', '因为小熊父子的真情交流，单纯、温馨又细致动人，那份相依为命、亲密无间的父子情，被作者拿捏得恰到好处，让你从心中涌起亲切而湿润的感动。'],
			function(tx, rs) {
				alert("插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
		tx.executeSql('insert into book values(?,?,?,?,?,?,?)', ['C005', '会飞的挖土机', '童书类', '伊恩· 威柏', '4','c_5.jpg','泰迪和鲁比从格兰戴姆先生那里得到了两辆玩具挖土机：一辆是反铲装载机，一辆是伸缩臂叉车。然而不可思议的事情发生了，这两辆玩具挖土机居然变成了真正的挖土机，而且还飞了起来……'],
			function(tx, rs) {
				alert("插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
		tx.executeSql('insert into book values(?,?,?,?,?,?,?)', ['C006', '世界真好', '童书类', '文·吉莉安 ', '2','c_6.jpg', '小老鼠睡不着，看着其他的兄弟姐妹都进入了甜甜的梦乡，他偷偷跑出了洞外。在洞外他发现了一个奇妙的世界：嗡嗡的蜜蜂，飞舞的蝴蝶，明亮的蓝天……'],
			function(tx, rs) {
				alert("插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
		tx.executeSql('insert into book values(?,?,?,?,?,?,?)', ['C007', '爱哭的猫头鹰', '童书类', '鲍尔·菲尔斯特 ', '2','c_7.jpg', '是谁哭得这么大声？是可怕的威尔伯老狼吗？不，只是一只猫头鹰小宝宝。刺猬、乌鸦、松鼠、鼹鼠、鹿角甲虫都来哄他，大家想尽一切办法让它安静下来。'],
			function(tx, rs) {
				alert("插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
		tx.executeSql('insert into book values(?,?,?,?,?,?,?)', ['C008', '狼图腾', '文学类', '姜戎', '2', 'c_8.jpg','《狼图腾》被誉为一部描绘蒙古草原狼的“旷世奇书”，它抒写了狼的团队精神和家族责任感，狼的智慧、顽强和尊严，倔强可爱的小狼在失去自由后艰难的成长过程，狼嗥、狼耳、狼眼、狼食、狼烟、狼旗……那些精灵般的狼仿佛随时能从书中呼啸而出。'],
			function(tx, rs) {
				alert("插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
		tx.executeSql('insert into book values(?,?,?,?,?,?,?)', ['C009', '活着', '文学类', '余华', '3', 'c_9.jpg','《活着》讲述了一个人历尽世间沧桑和磨难的一生，亦将中国大半个世纪的社会变迁凝缩其间。讲述了绝望的不存在；讲述了人是为了活着本身而活着的，而不是为了活着之外的任何事物而活着。'],
			function(tx, rs) {
				alert("插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
		tx.executeSql('insert into book values(?,?,?,?,?,?,?)', ['C010', '围城', '文学类', '钱钟书', '2', 'c_10.jpg','钱锺书所著的《围城》是一幅栩栩如生的世井百态图，人生的酸甜苦辣千般滋味均在其中得到了淋漓尽致的体现。钱钟书先生将自己的语言天才并入极其渊博的知识，再添加上一些讽刺主义的幽默调料，以一书而定江山。'],
			function(tx, rs) {
				alert("插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
		tx.executeSql('insert into book values(?,?,?,?,?,?,?)', ['C011', '白鹿原', '文学类', '陈忠实', '0', 'c_11.jpg','《白鹿原》两个家族为争夺白鹿原的统治上演了一幕幕惊心动魄的争斗：巧取风水地，恶施美人计，孝子为匪，亲翁杀媳，兄弟相煎，情人反目…… '],
			function(tx, rs) {
				alert("插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
		tx.executeSql('insert into book values(?,?,?,?,?,?,?)', ['C012', '谁在敲门', '文学类', '罗伟章', '5', 'c_12.jpg','《谁在敲门》人物众多，以许家为核心，描写在风起云涌的时代背景之下，土地对农民的束缚已走向瓦解，依附在土地之上的乡村伦理道德也走向瓦解与重构，三代农民子女的命运变迁，让人切实触摸到当下现实的温度，有一种厚重的历史感，也激发读者对生命、生活、亲情的反思。小说呈现了广阔丰饶的民族性格和深刻的社会内涵。'],
			function(tx, rs) {
				alert("插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
		tx.executeSql('insert into borrow values(?,?,?,?,?)', ['user1', "", "", "", '0'],
			function(tx, rs) {
				alert("借书证插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
	})
}


function insertLibNews(db) {
	db.transaction(function(tx) {
		tx.executeSql('insert into lib_msg values(?,?,?,?,?)', ['N001', '新增加一批图书！！', '2019-09-20', 'msg_1.jpg',
				'为更好满足广大干部群众对学习习近平新时代中国特色社会主义思想图书的阅读需求，近期“新时代 新经典——学习习近平新时代中国特色社会主义思想重点数字图书专栏”新增上线一批重点数字图书。新增上线的重点数字图书共48种，分别由人民出版社、中央文献出版社、外文出版社等11家出版单位出版，涵盖习近平总书记著作、讲话单行本，以及论述摘编、学习纲要、思想研究、学习案例体会、描写习近平总书记工作生活经历的作品等。'
			],
			function(tx, rs) {
				alert("消息插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
		tx.executeSql('insert into lib_msg values(?,?,?,?,?)', ['N002', '本图书馆将于2021年10月1号闭馆，开馆时间届时app上通知！！',
				'2019-09-29', 'msg_2.jpg',
				'根据学校《关于国庆节放假的通知》要求，10月1日（周一）至3日（周三）图书馆总馆及各分馆（含翔安校区）全天闭馆。10月4日（周四）起各馆恢复正常开放，特此通知，望周知。'
			],
			function(tx, rs) {
				alert("消息插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
		tx.executeSql('insert into lib_msg values(?,?,?,?,?)', ['N003', '图书馆逾期未换书籍人员名单！！', '2019-10-05',
				'msg_3.jpg', '逾期的图书投入还书箱，经馆员做还书处理后，读者证的图书馆功能会暂被冻结，直到结清滞期费，请尽量不要将逾期图书投入还书箱。'
			],
			function(tx, rs) {
				alert("消息插入成功！")
			},
			function(tx, err) {
				alert("失败");
			})
	})
}

function checkAdmin(db, name, password, type) {
	db.transaction(function(tx) {
		if (type == "用户") {
			tx.executeSql('select * from users where username=? and password=?', [name,password], function(tx, result) {
					//for(var i=0;i<result.rows.length;i++){
				if(result.rows.length!=0){
					//item = result.rows.item(0);
						// alert("密码正确！！");
						mui.openWindow({
							
							url: "myCenter.html",
							id: "myCenter",
							createNew:true,
							extras: {
								username: name
							}
						});
				}else{alert("账号或密码错误！！")}
			},function(tx, err) {
					alert("没有此用户！！");
			})
		} else {
			tx.executeSql('select * from admin where Adname=? ', [name], function(tx, result) {
					//for(var i=0;i<result.rows.length;i++){
					//alert(result.innerHTML);
				if(result.rows.length!=0){	
					item = result.rows.item(0);
					if (password == item.Adpassword) {
						mui.openWindow({
							url: "admin_new_op.html",
							id: "admin_new_op",
							createNew:true,
							extras: {
								username: name
							}
						});
					} else {
						alert("账号或密码错误！！");
					}
					}else{alert("账号密码错误！！");}
				},
				function(tx, err) {
					alert("没有此用户！！");
				})
		}
		
	})
}

function sel_all_data(db, id) {
	db.transaction(function(tx) {

		tx.executeSql('select * from book where bookid=?', [id], function(tx, result) {
				item = result.rows.item(0);
				var str = "";
				str += "<div class=\"mui-card\">" +
					"<div class=\"mui-card-header \">" +
					"<div class=\"mui-media-body\">" +
					item.bookname +
					"<p>" + item.bookauthor + "</p>" +
					"</div>" +
					"</div>" +
					"<img src=\"imgs/" + item.bookpic + "\" style=\"width:30%;align-items: center;\">" +
					"<div class=\"mui-card-content\">" +
					item.detail +
					"</div>" +
					"<div class=\"mui-card-footer\">" +
					"剩余书的数量:	" +
					item.booknumber +
					"</div>" +
					"</div>";

				$("#all_data").html(str);
			}),
			function(tx, err) {
				alert("没有此用户！！");
			}
	})
}
//new　Ｄａｔａ（）
function show_new(db) {
	db.transaction(function(tx) {
		tx.executeSql('select * from lib_msg ', [], function(tx, result) {
				var str = "";
				for (var i = 0; i < result.rows.length; i++) {
					item = result.rows.item(i);
					str += "<div class=\"mui-card\" id=\"" + item.newid + "\">" +
						"<div class=\"mui-card-header \">" +
						"<div class=\"mui-media-body\">" +
						item.newTit +
						"<p>发表于 " +
						item.newData +
						"</p>" +
						"</div>" +
						"</div>" +
						"<img src=\"imgs/" + item.newPic + "\" style=\"width:30%;align-items: center;\">" +
						"<div class=\"mui-card-footer\">"+
						item.detail+
						"</div>"+
						"</div>";
					$("#new_show").html(str);
				}
			}),
			function(tx, err) {
				alert("错误！！");
			}
	})
}

function show_all_book(db) {
	db.transaction(function(tx) {
		tx.executeSql('select * from book ', [], function(tx, result) {
				var str2 = "";
				for (var i = 0; i < 3; i++) {
					item = result.rows.item(i);
					str2 += "<li class=\"mui-table-view-cell mui-media\" id=\"" + item.bookid + "\">" +
						"<a href=\"javascript:;\">" +
						"<img class=\"mui-media-object mui-pull-right\" src=\"imgs/" + item.bookpic +"\">" +
						"<div class=\"mui-media-body\">" +
						item.bookname +
						"</div>" +
						"	</a>" +
						"</li>";
					$("#testUl").html(str2);
				}
			}),
			function(tx, err) {
				alert("错误！！");
			}
	})
}


function show_book_in(db) {
	db.transaction(function(tx) {
		tx.executeSql('select * from book ', [], function(tx, result) {
				var str2 = "";
				for (var i = 0; i < result.rows.length; i++) {
					item = result.rows.item(i);
					str2 += "<li class=\"mui-table-view-cell mui-media\" id=\"" + item.bookid + "\">" +
						"<a href=\"javascript:;\">" +
						"<img class=\"mui-media-object mui-pull-right\" src=\"imgs/" + item.bookpic +"\">" +
						"<div class=\"mui-media-body\">" +
						item.bookname +
						"</div>" +
						"	</a>" +
						"</li>";
					$("#testUl").html(str2);
				}
			}),
			function(tx, err) {
				alert("错误！！");
			}
	})
}

// function searchBook(db, bookid) {
// 	db.transaction(function(tx) {
// 		tx.executeSql("select * from book where bookid = ?", [bookid], function(tx, rs) {
// 				var str3 = "";
// 				for (var i = 0; i < rs.rows.length; i++) {
// 					item = rs.rows.item(i);
// 					str3 += "<div class=\"mui-card\">" +
// 						"<div class=\"mui-card-header mui-card-media\">" +
// 						"<img src=\"imgs/" + item.bookpic +"\">" +
// 						"<div class=\"mui-media-body\">" +
// 						item.bookname +
// 						"<p>作者是：" + item.bookauthor + "</p>" +
// 						"</div>" +
// 						"</div>" +
// 						"<div class=\"mui-card-content\">" +
// 						item.detail +
// 						"</div>" +
// 						"<div class=\"mui-card-footer\">" +
// 						"书籍剩余数量："+item.booknumber +
// 						"</div>" +
// 						"</div>";

// 					$("#show_search_book").html(str3);
// 				}
// 			}),
// 			function(tx, err) {
// 				alert("错误！！");
// 			}
// 			})
// 	}

function borrow_book(db, id, name,pwd) {
	db.transaction(function(tx) {
		tx.executeSql('select * from users where username=? and password=?',[name,pwd],function(tx,res11){
			if(res11.rows.length!=0){
				tx.executeSql('select * from book where bookid=?', [id], function(tx, resl) {
					item1 = resl.rows.item(0)
					if (item.booknumber != 0) {
						tx.executeSql('select * from borrow where username=?', [name], function(tx, rs) {
							item = rs.rows.item(0);
							if (item.book_1 == "") {
								tx.executeSql('update borrow set book_1=? where username=?', [id, name],function(tx, res) {
									tx.executeSql('update book set booknumber=booknumber-1 where bookid=?',[id],function(tx, res) {
												tx.executeSql('update borrow set password=password+1 where username=?',[name],function(tx, res) {
														alert("成功借阅！");
													},
													function(tx, err) {
														alert("失败！")
													})
											},
											function(tx, err) {
												alert("失败！")
											})
									},
									function(tx, err) {
										alert("失败！")
									})
							} else if (item.book_2 == "") {
								tx.executeSql('update borrow set book_2=? where username=?', [id, name],
									function(tx, res) {
										tx.executeSql(
											'update book set booknumber=booknumber-1 where bookid=?',
											[id],
											function(tx, res) {
												tx.executeSql(
													'update borrow set password=password+1 where username=?',
													[name],
													function(tx, res) {
														alert("成功借阅！");
													},
													function(tx, err) {
														alert("失败！")
													})
											},
											function(tx, err) {
												alert("失败！")
											})
									},
									function(tx, err) {
										alert("失败！")
									})
							} else if (item.book_3 == "") {
								tx.executeSql('update borrow set book_3=? where username=?', [id, name],
									function(tx, res) {
										tx.executeSql(
											'update book set booknumber=booknumber-1 where bookid=?',
											[id],
											function(tx, res) {
												tx.executeSql(
													'update borrow set password=password+1 where username=?',
													[name],
													function(tx, res) {
														alert("成功借阅！");
													},
													function(tx, err) {
														alert("失败！")
													})
											},
											function(tx, err) {
												alert("失败！")
											})
									},
									function(tx, err) {
										alert("失败！")
									})
							} else {
								alert("请先还书！！");
							}
						})
					} else {
						alert("书籍数量不足，请等还书！！");
					}
				}, function(tx, err) {
					alert("错误")
				})
		}else{alert("借书号或密码错误！！！");}
		})
	})

}

function insertUser(db, name, pwd, tel, email, pic) {
	db.transaction(function(tx) {
		tx.executeSql('select * from users where username=?',[name],function(tx,result){
			if(result.rows.length!=0){alert("已经存在同名用户无法注册！！");}
			else {
				tx.executeSql('insert into users values(?,?,?,?,?,?)', [name, pwd, tel, '0', email, pic], function(tx,rs) {
					tx.executeSql('insert into borrow values(?,?,?,?,?)',[name,"","","",'0'],function(tx,res){alert("注册成功");},function(tx,err){alert("借书表插入失败！！");})
				}, function(tx, err) {
					alert("失败");
				})
			}
		})
	})
}

function clear_user(db) {
	db.transaction(function(tx) {
		tx.executeSql('delete from lib_msg', [], function(tx, rs) {
			alert("删除表内容");
		}, function(tx, err) {
			alert("失败");
		})
	})
}

function show_photo(db, name) {
	db.transaction(function(tx) {
		tx.executeSql('select * from users where username=?', [name], function(tx, rs) {
				var str = "";
				item = rs.rows.item(0);
				str += "<img src=\"imgs/" + item.userpic +
					"\" style=\"border-radius: 100px;width: 80px;height: 80px;display: block;margin: 0 auto;\">" +
					"<p style=\"text-align: center;margin-top: 15px;font-size:10px;font-weight: bold\">" +
					item.username + "</p>";
				$("#test1").html(str);
			},
			function(tx, err) {
				alert("错误！");
			})
	})
}

function my_borrow(db, name) {
	db.transaction(function(tx) {
		var str = "";
		tx.executeSql('select * from borrow where username=?', [name], function(tx, rs) {

			item = rs.rows.item(0);
			str += "<li class=\"mui-table-view-cell mui-media\" id=\"" + item.book_1 + "\">" +
				"<a href=\"javascript:;\">" +
				"<div class=\"mui-media-body\">" +
				item.book_1 +
				"</div>" +
				"</a>" +
				"</li>" +
				"<li class=\"mui-table-view-cell mui-media\" id=\"" + item.book_2 + "\">" +
				"<a href=\"javascript:;\">" +
				"<div class=\"mui-media-body\">" +
				item.book_2 +
				"</div>" +
				"	</a>" +
				"</li>" +
				"<li class=\"mui-table-view-cell mui-media\" id=\"" + item.book_3 + "\">" +
				"<a href=\"javascript:;\">" +
				"<div class=\"mui-media-body\">" +
				item.book_3 +
				"</div>" +
				"	</a>" +
				"</li>";

			$("#testUl").html(str);

		})
	})
}

function return_book_op(db, id, name) {
	var str = "";
	db.transaction(function(tx) {
		tx.executeSql('update book set booknumber =booknumber+1 where bookid=?', [id], function(tx, rs) {
			tx.executeSql('select * from borrow where username=?', [name], function(tx, res) {
				item = res.rows.item(0);
				if (item.book_1 == id) {
					tx.executeSql('update borrow set book_1=\'\'', [], function(tx, res) {
						tx.executeSql('update borrow set password =password-1 ', [], function(tx, rs) {
						
						alert("还书成功");
						})
					})
				} else if (item.book_2 == id) {
					tx.executeSql('update borrow set book_2=\'\'', [], function(tx, res) {
						tx.executeSql('update borrow set password =password-1 ', [], function(tx, rs) {
						
						alert("还书成功");
						})
					})
				} else if (item.book_3 == id) {
					tx.executeSql('update borrow set book_3=\'\'', [], function(tx, res) {
						tx.executeSql('update borrow set password =password-1 ', [], function(tx, rs) {
						
						alert("还书成功");
						})
					})
				} else {
					alert("未借阅此书籍！");
				}
			}, function(tx, err) {
				alert("还书失败！！！");
			})
		}, function(tx, err) {
			alert("还书失败！！！");}
		)
	})
}
function change_pwd(db,name,oldpwd,newpwd){
	db.transaction(function(tx){
		tx.executeSql('select * from users where username=? and password=?',[name,oldpwd],function(tx,rs){
			if(rs.rows.length!=0){
				tx.executeSql('update users set password=? where username=?',[newpwd,name],function(tx,res){
					alert("修改成功！！");
					window.location.href="my_load.html";
				},function(tx,err){
					alert("修改失败！！");
				})
			}else{alert("原密码错误！");}
		})
	})
}


function allview() {
	window.location.href = "index.html";
}

function myview() {
	window.location.href = "my_load.html";
}

function all_msg() {
	window.location.href = "all_msg.html";

}

function search_book() {
	window.location.href = "search_book.html";

}

function getBook() {
	window.location.href = "getBook.html";
}

function myCenter() {
	window.location.href = "myCenter.html";
}
