Çalışan projelerden MYSQL sorguları

SELECT 
`t`.`ID`,
`c`.`AppUsername`,
`t`.`QuestionDetail`,
`t`.`SeoLabel`,
`t`.`Frequency`,
DATEDIFF(NOW(),`t`.`CreateTime`) as 'CreateDay',
DATEDIFF(NOW(),`t`.`LastVotingTime`) as 'LastSelectionDay',
`t`.`SelectionQues`,`t`.`TotalUsingVote`, 
`a`.`Description` AS 'UniqueVotingName', 
`b`.`Description` AS 'QuestionTypeName' 
FROM `seltbl1` as `t` 
INNER JOIN `seltbl1_uniquevoting` as `a` ON `t`.`UniqueVoting` = `a`.`SID` 
INNER JOIN `seltbl1_questiontype` as `b` ON `t`.`QuestionType` = `b`.`SID` 
INNER JOIN `usertbl1` as `c` ON `t`.`RelUserID` = `c`.`ID` 
WHERE `t`.`QuestionStatus`=1 AND 
`t`.`PublishType`=(SELECT `t1`.`SID` FROM `seltbl1_publishtype` AS `t1` WHERE `t1`.`Description`='Genel' LIMIT 1) AND 
`t`.`UniqueVoting`=1 AND 
(`t`.`ShowingTime`>DATEDIFF(NOW(),`t`.`CreateTime`) OR 
`t`.`ShowingTime`=0) 
ORDER BY `t`.`TotalUsingVote` DESC LIMIT 0,10;

SET @ID='x';
SELECT 
`t`.`ID`, 
`c`.`AppUsername`, 
`t`.`CreateTime`, 
DATEDIFF(NOW(),`t`.`CreateTime`) as 'CreateDay', 
`t`.`LastVotingTime`, 
DATEDIFF(NOW(),`t`.`LastVotingTime`) as 'LastSelectionDay', 
`t`.`QuestionType`, 
`t`.`SelectionQues`, 
`t`.`QuestionDetail`, 
`t`.`Frequency`, 
`t`.`VotingTime`, 
`t`.`StorageTime`, 
`t`.`ShowCount`, 
`t`.`ShowingTime`, 
`t`.`SeoLabel`, 
`t`.`VoteCount`, 
`t`.`TotalUsingVote`, 
`e`.`Description` AS 'PublicType', 
`d`.`Description` AS 'Info', 
`a`.`Description` AS 'UniqueVotingName', 
`b`.`Description` AS 'QuestionTypeName' 
FROM `seltbl1` as `t` 
INNER JOIN `seltbl1_uniquevoting` as `a` ON `t`.`UniqueVoting` = `a`.`SID` 
INNER JOIN `seltbl1_questiontype` as `b` ON `t`.`QuestionType` = `b`.`SID` 
INNER JOIN `usertbl1` as `c` ON `t`.`RelUserID` = `c`.`ID`
INNER JOIN `seltbl1_statusinfo` as `d` ON `t`.`StatusInfo` = `d`.SID
INNER JOIN `seltbl1_publishtype` as `e` ON `t`.`PublishType` = `e`.SID
WHERE 
`t`.`ID`=@ID AND 
`t`.`QuestionStatus`=1;



SET @ID ="x";
SELECT `u`.ID,
`u`.AppUsername,
`u`.Name,
`u`.Surname,
`a`.Description as 'AccessLevel',
`u`.AccessLevel as 'AccessLevelCode',
`d`.Description as 'Status',
`u`.Status as 'StatusCode',
`b`.Description as 'AccountMode',
`u`.AccountMode as 'AccountModeCode',
`c`.Description as 'Confirmation',
`u`.Confirmation as 'ConfirmationCode',
`u`.SysPermission,
`u`.Mail,
`u`.GSM,
`u`.RegisterDate,
`u`.LastUpdate,
`u`.PayFinishedDate,
`u`.Picture 
FROM `usertbl1` as u 
INNER JOIN `usertbl1_accesslevel` as a ON `u`.AccessLevel = `a`.SID 
INNER JOIN `usertbl1_accountmode` as b ON `u`.AccountMode = `b`.SID 
INNER JOIN `usertbl1_confirmation` as c ON `u`.Confirmation = `c`.SID 
INNER JOIN `usertbl1_status` as d ON `u`.Status = `d`.SID 
WHERE u.ID=@ID LIMIT 1;
SELECT `Y`.`T` AS `Type`,COUNT(`Y`.`T`) AS `Number` FROM (SELECT `a`.`Description` AS `T` FROM `seltbl1` AS `U` INNER JOIN `seltbl1_questiontype` AS `a` ON `U`.`QuestionType` = `a`.`SID` WHERE `U`.`RelUserID`=@ID AND `U`.`QuestionStatus`=1) AS `Y` GROUP BY `Y`.`T`;