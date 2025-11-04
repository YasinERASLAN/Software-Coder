<?php

// Verilen tarih aralıklarındaki gün farkını döndürür.
function CalculateDays(string $First='2024-04-05 15:44:28', string $Last='2024-04-05 15:44:28' )
{
	$CurrDay= new DateTime($Last);
	$FirstDay= new DateTime($First);
	$interval= $FirstDay->diff($CurrDay);
	return (int)(((int) $interval->format('%a'))+(int)2);
}

// Verilen dosyadaki verileri satır satır okuyarak istenilen veri ile karşılaştırır. Eşitlik sorgulaması yapar.
function UID_DIDCompare(string $Did='Sample', string $DosyaFullYol='****.txt')
{
	$dt = @fopen($DosyaFullYol, "r");
	if ($dt) 
	{
		while (($buffer = fgets($dt)) !== false)
		{	if(trim($buffer)==$Did){@fclose(@$dt);return 'OK';}		}
		@fclose(@$dt);return 'NOK';
	}
	else{return false;}
}

// Bir dosyaya satır satır veri yazmak için kullanılan fonksiyondur.
// Her çalışmada tek satırı ekler ve sonlanır. Tekrar çalıştırıldığında yeni bir satır ekler.
function TxtDB_WriteLine(string $Md="w", string $Vr="" , string $DosyaFullYol='****.txt')
{
	$dt = @fopen($DosyaFullYol,$Md);
	if ($dt) 	{ $Vr=trim($Vr);if(trim($Vr)==""){return true;}if(fwrite($dt, $Vr."\n")){@fclose(@$dt);return true;}else{@fclose(@$dt);return false;} }
	else{return false;}
}


// Sık olarak isteklerde bulunmayı engelleyen fonksiyon.
// Verilen Saniye süresi içerisindeki sürekli istekleri engeller.
function RequestTimeLimit(float $Limit=0, string $file='')
{
	$p=(float)(microtime(true));
	$dt = @fopen($file, "r");
	if ($dt) 
	{
		if (($buffer = fgets($dt)) !== false)
		{	
			$t=(float)floatval(trim($buffer));
			if((float)((float)$p-(float)$t)<$Limit)	
			{	@fclose(@$dt);return false;	}
		}
		@fclose(@$dt);
	}
		$dt = @fopen($file, "w");
		if ($dt)
		{
			if(fwrite($dt, $p)){}else{@fclose(@$dt);return false;}
			@fclose(@$dt);return true;
		}
		else
		{	return false;	}
}


function human_filesize($bytes, $decimals = 2) {
    $factor = floor((strlen($bytes) - 1) / 3);
    if ($factor > 0) $sz = 'KMGT';
    return sprintf("%.{$decimals}f", $bytes / pow(1024, $factor)) . @$sz[$factor - 1] . 'B';
}


function delete_files($target) 
{
    if(is_dir($target))
	{
        $files = glob( $target . '*', GLOB_MARK );
        foreach( $files as $file )
		{	delete_files( $file );	}
        rmdir( $target );
    } 
	elseif(is_file($target)) 
	{	unlink( $target );	}
}

?>