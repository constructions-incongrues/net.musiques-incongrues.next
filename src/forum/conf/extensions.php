<?php
// Make sure this file was not accessed directly and prevent register_globals configuration array attack
if (!defined('IN_VANILLA')) {
    exit();
}

// Native extensions
include($Configuration['EXTENSIONS_PATH']."DiscussionPages/default.php");
include($Configuration['EXTENSIONS_PATH']."NewApplicants/default.php");
include($Configuration['EXTENSIONS_PATH']."Whisperfi/default.php");

// Custom extensions
include($Configuration['EXTENSIONS_PATH']."CiTwigTemplates/default.php");
