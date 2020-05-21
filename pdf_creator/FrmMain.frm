VERSION 5.00
Object = "{EAB22AC0-30C1-11CF-A7EB-0000C05BAE0B}#1.1#0"; "shdocvw.dll"
Object = "{F9043C88-F6F2-101A-A3C9-08002B2F49FB}#1.2#0"; "comdlg32.ocx"
Begin VB.Form FrmMain 
   Caption         =   "Print "
   ClientHeight    =   1995
   ClientLeft      =   60
   ClientTop       =   345
   ClientWidth     =   7290
   LinkTopic       =   "Form1"
   MaxButton       =   0   'False
   ScaleHeight     =   1995
   ScaleWidth      =   7290
   StartUpPosition =   2  'CenterScreen
   Begin VB.CommandButton CmdClose 
      Caption         =   "E&nd"
      BeginProperty Font 
         Name            =   "Verdana"
         Size            =   8.25
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   6360
      TabIndex        =   6
      Top             =   1320
      Width           =   495
   End
   Begin MSComDlg.CommonDialog CmnDlg 
      Left            =   6360
      Top             =   1320
      _ExtentX        =   847
      _ExtentY        =   847
      _Version        =   393216
   End
   Begin VB.TextBox TxtOFlName 
      BeginProperty Font 
         Name            =   "Verdana"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   240
      TabIndex        =   5
      Text            =   "Text1"
      Top             =   1320
      Width           =   5895
   End
   Begin VB.TextBox TxtFlName 
      BeginProperty Font 
         Name            =   "Verdana"
         Size            =   9.75
         Charset         =   0
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   360
      Left            =   240
      TabIndex        =   2
      Text            =   "Text1"
      Top             =   480
      Width           =   5895
   End
   Begin VB.CommandButton CmdClick 
      Caption         =   "..."
      BeginProperty Font 
         Name            =   "Verdana"
         Size            =   9.75
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   375
      Left            =   6360
      TabIndex        =   3
      Top             =   480
      Width           =   495
   End
   Begin SHDocVwCtl.WebBrowser WBrowser 
      Height          =   375
      Left            =   120
      TabIndex        =   0
      Top             =   2160
      Width           =   375
      ExtentX         =   661
      ExtentY         =   661
      ViewMode        =   0
      Offline         =   0
      Silent          =   0
      RegisterAsBrowser=   0
      RegisterAsDropTarget=   1
      AutoArrange     =   0   'False
      NoClientEdge    =   0   'False
      AlignLeft       =   0   'False
      NoWebView       =   0   'False
      HideFileNames   =   0   'False
      SingleClick     =   0   'False
      SingleSelection =   0   'False
      NoFolders       =   0   'False
      Transparent     =   0   'False
      ViewID          =   "{0057D0E0-3573-11CF-AE69-08002B2E1262}"
      Location        =   ""
   End
   Begin VB.Label LblDisplay 
      Caption         =   "Output File Name :-"
      BeginProperty Font 
         Name            =   "Verdana"
         Size            =   8.25
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Index           =   1
      Left            =   240
      TabIndex        =   4
      Top             =   960
      Width           =   1815
   End
   Begin VB.Label LblDisplay 
      Caption         =   "Input File Name :-"
      BeginProperty Font 
         Name            =   "Verdana"
         Size            =   8.25
         Charset         =   0
         Weight          =   700
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   255
      Index           =   0
      Left            =   240
      TabIndex        =   1
      Top             =   120
      Width           =   1815
   End
End
Attribute VB_Name = "FrmMain"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Dim strBuffer() As String, IncY As Integer, DefDriver As String, DefPort As String, DefPrinter As String

Private Sub CmdClick_Click()
If TxtFlName.Text = "" Then
    CmnDlg.Filter = "Htm Files *.htm|*.htm|Html Files*.html|*.html"
    CmnDlg.ShowOpen
    TxtFlName.Text = CmnDlg.FileName
    WBrowser.Navigate CmnDlg.FileName
Else
    WBrowser.Navigate Trim(TxtFlName.Text)
End If
FrmMain.MousePointer = vbHourglass
End Sub

Private Sub CmdClose_Click()
    Unload FrmMain
    End
End Sub

Private Sub Form_Load()
    Dim Buffer As String, IncX As Integer, sBuf As String
    Buffer = Space(8192)
    TxtFlName = "": TxtOFlName = ""
    GetProfileString "PrinterPorts", vbNullString, "", Buffer, Len(Buffer)
    IncY = 1
    Debug.Print Buffer
   Do
    ReDim Preserve strBuffer(IncY)
    IncX = InStr(Buffer, Chr(0))
        If IncX > 0 Then
            sBuf = Left(Buffer, IncX - 1)
            If Len(Trim(sBuf)) Then strBuffer(IncY) = sBuf
            Buffer = Mid(Buffer, IncX + 1)
        Else
            If Len(Trim(Buffer)) Then strBuffer(IncY) = sBuf
            Buffer = ""
        End If
        IncY = IncY + 1
    Loop While IncX > 0
    
    Call SetPDFWriter_Printer
    DefPrinter = strBuffer(1)
End Sub

Public Sub SetPDFWriter_Printer()
    Dim Buffer As String
    Dim DeviceName As String
    Dim DriverName As String
    Dim PrinterPort As String
    Dim PrinterName As String
    Dim IncX As Integer
    For IncX = 1 To IncY - 1
        Buffer = Space(1024)
        If IncX <> 1 Then
            If UCase(strBuffer(IncX)) = "ACROBAT PDFWRITER" Then PrinterName = strBuffer(IncX)
            GetProfileString "PrinterPorts", PrinterName, "", Buffer, Len(Buffer)
            GetDriverAndPort Buffer, DriverName, PrinterPort
        Else
            GetProfileString "PrinterPorts", PrinterName, "", Buffer, Len(Buffer)
            GetDriverAndPort Buffer, DefDriver, DefPort
        End If
    Next
        If DriverName <> "" And PrinterPort <> "" Then
            SetDefaultPrinter PrinterName, DriverName, PrinterPort
        End If
End Sub
Private Sub GetDriverAndPort(ByVal Buffer As String, DriverName As String, PrinterPort As String)
    Dim iDriver As Integer
    Dim iPort As Integer
    DriverName = ""
    PrinterPort = ""

    iDriver = InStr(Buffer, ",")
    If iDriver > 0 Then
        DriverName = Left(Buffer, iDriver - 1)
        iPort = InStr(iDriver + 1, Buffer, ",")
        If iPort > 0 Then
            PrinterPort = Mid(Buffer, iDriver + 1, iPort - iDriver - 1)
        End If
    End If
End Sub

Private Sub SetDefaultPrinter(ByVal PrinterName As String, _
    ByVal DriverName As String, ByVal PrinterPort As String)
    Dim DeviceLine As String
    Dim r As Long
    Dim l As Long
    DeviceLine = PrinterName & "," & DriverName & "," & PrinterPort
    r = WriteProfileString("windows", "Device", DeviceLine)
    l = SendMessage(HWND_BROADCAST, WM_WININICHANGE, 0, "windows")
End Sub

Private Sub Form_QueryUnload(Cancel As Integer, UnloadMode As Integer)
    Form_Unload Cancel
End Sub

Private Sub Form_Unload(Cancel As Integer)
    SetDefaultPrinter DefPrinter, DefDriver, DefPort
End Sub

Private Sub TxtFlName_KeyPress(KeyAscii As Integer)
    If KeyAscii = 13 Then CmdClick_Click
End Sub

Private Sub WBrowser_DocumentComplete(ByVal pDisp As Object, URL As Variant)
FrmMain.MousePointer = vbDefault
If TxtFlName <> "" Then
    WBrowser.ExecWB OLECMDID_PRINT, OLECMDEXECOPT_DONTPROMPTUSER, , CmnDlg.FileName
End If
End Sub

