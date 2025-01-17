package qbittorrent

import (
	"github.com/alist-org/alist/v3/internal/conf"
	"github.com/alist-org/alist/v3/internal/setting"
	"github.com/alist-org/alist/v3/pkg/task"
)

// 最大同时下载监视(监测)任务数量
var DownTaskManager = task.NewTaskManager[string](30)
var qbclient Client

func InitClient() error {
	var err error
	qbclient = nil

	url := setting.GetStr(conf.QbittorrentUrl)
	qbclient, err = New(url)
	return err
}

func IsQbittorrentReady() bool {
	return qbclient != nil
}
